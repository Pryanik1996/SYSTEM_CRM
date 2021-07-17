const { Router } = require("express");
const checkAuth = require("../middlewares/checkAuth");
const User = require("../db/models/userModel");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, DB_HOST, PORT, REFRESH_TOKEN } =
  process.env;

const router = Router();
let defaultUser;
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:3001/auth/google/callback`,
      passReqToCallback: true,
    },

    async (request, accessToken, refreshToken, profile, done) => {
      defaultUser = {
        name: `${profile.name.givenName} ${profile.name.familyName}`,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
        googleId: profile.id,
      };

      const user = await User.findOrCreate(profile._json, (err, user) => {
        if (err) {
          return done(err);
        }
        done(null, user);
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

router.get(
  "/signinwithgoogle",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/clients",
    failureRedirect: "/auth/google/failure",
  })
);

router.get("/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

router.get("/user", (req, res) => {
  console.log("getting user data!");
  // console.log(req.session?.passport.user);
  return res.json(defaultUser);
});

router.route("/check").get(checkAuth, async (req, res) => {
  try {
    const user = await User.findOne(
      { googleId: req.session.passport.user.googleId },
      { password: 0 }
    );
    console.log("!!!!", user);
    return res.json(user);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.route("/signout").get((req, res) => {
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500);
    defaultUser = null;
    res.clearCookie(req.app.get("cookieName"));
    return res.sendStatus(200);
  });
});

module.exports = router;
