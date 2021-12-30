var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var app = express();
const rateLimit = require("express-rate-limit");
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
const limitReached = (req, res) => {
  res.send("Too many request from this IP Please wait 10 seconds");
};
const limiter = rateLimit({
  windowMs: 10000,

  max: 2,

  message: "no!",

  resetTime: 10000,

  handler: limitReached,
});
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(limiter);
app.use("/", limiter, indexRouter);
app.use("/all/:country/:city/:date", limiter, indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
