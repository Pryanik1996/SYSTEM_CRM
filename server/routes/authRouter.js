const { Router } = require("express");
const User = require("../db/models/userModel");

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, DB_HOST, PORT, REFRESH_TOKEN } =
  process.env;

const oAuth2Client = new OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);

oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

// const saltRounds = 10;

const router = Router();

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      // callbackURL: `http://${DB_HOST}:${PORT}/auth/google/callback`,
      callbackURL: "http://localhost:3001/auth/google/callback",
      passReqToCallback: true,
    },
    // function (request, accessToken, refreshToken, profile, done) {
    //   return done(null, profile);
    // }
    async (request, accessToken, refreshToken, profile, cb) => {
      const defaultUser = {
        name: `${profile.name.givenName} ${profile.name.familyName}`,
        email: profile.emails[0].value,
        // picture: profile.photos[0].value,
        googleId: profile.id,
      };

      const user = await User.create(defaultUser).catch((err) => {
        console.log("ERROR SIGNING", err);
        cb(err, null);
      });
      if (user && user[0]) return cb(null, user && user[0]);
    }
  )
);

// console.log('request.session===>', request.session);

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
    successRedirect: "/",
    failureRedirect: "/auth/google/failure",
  })
);

router.get("/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

// router.route("/signup/:msg").get((req, res) => {
//   res.render("signup", { msg: req.params.msg });
// });

// router
//   .route("/signup")
//   .get(async (req, res) => {
//     res.render("signup");
//   })
//   .post(async (req, res) => {
//     try {
//       const { name, email, password: tmpPassword } = req.body;
//       const password = await bcrypt.hash(tmpPassword, saltRounds);
//       if (name && email && password) {
//         const newUser = await User.create({
//           name,
//           email,
//           password,
//         });
//         if (newUser) {
//           req.session.user = {
//             id: newUser._id,
//             name: newUser.name,
//           };
//           res.redirect("/");
//         } else {
//           res.status(418).redirect("/auth/signup");
//         }
//         // res.status(418).redirect("/auth/signup");
//       } else {
//         const msg = "Fill in all fields";
//         res.redirect(`/auth/signup/${msg}`);
//       }
//     } catch (err) {
//       const msg = "Something went wrong. Maybe user already exists";
//       return res.status(418).redirect(`/auth/signup/${msg}`);
//     }
//   });

// router.route("/signin/:msg").get((req, res) => {
//   res.render("signin", { msg: req.params.msg });
// });

// router
//   .route("/signin")
//   .get((req, res) => {
//     res.render("signin");
//   })
//   .post(async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       if (email && password) {
//         const currentUser = await User.findOne({ email });
//         if (
//           currentUser &&
//           (await bcrypt.compare(password, currentUser.password))
//         ) {
//           req.session.user = {
//             id: currentUser._id,
//             name: currentUser.name,
//           };
//           return res.redirect("/");
//         }
//         // const message = "please sign up";
//         // return res.status(401).render("signin", { message });
//         const msg = "User is not found. Please sign up";
//         return res.status(401).redirect(`/auth/signin/${msg}`);
//       }
//       // return res.status(401).redirect("/auth/signin");
//       const msg = "Fill in all fields";
//       return res.status(401).redirect(`/auth/signin/${msg}`);
//     } catch (error) {
//       console.log(error);
//       res.sendStatus(406);
//     }
//   });

router.route("/signout").get((req, res) => {
  req.session.destroy();
  res.clearCookie(req.app.get("cookieName"));
  res.redirect("/");
});

module.exports = router;
