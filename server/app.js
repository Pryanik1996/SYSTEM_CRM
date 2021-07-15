require("dotenv").config();
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cors = require("cors");
const MongoStore = require("connect-mongo");
const { dbConnectionURL, connect } = require("./db/config/config");
const authRouter = require ('./routes/authRouter')

const app = express();

const { PORT, COOKIE_SECRET, COOKIE_NAME } = process.env;

connect();

app.set("cookieName", COOKIE_NAME);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(
  session({
    name: app.get("cookieName"),
    secret: COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: dbConnectionURL,
    }),
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1e3 * 86400,
    },
  })
);

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log("Server has been started on PORT ", PORT);
});
