const express = require("express");
const ErrorHandling = require("./error/ErrorHandling");
const ErrorMiddleware = require("./error/ErrorMiddleware");

const userRoute = require("./user/userRoute");

const app = express();
app.use(express.json());

// router
app.use(userRoute);

app.use("*", (req, res, next) => {
     const endpoint = req.originalUrl;
     next(new ErrorHandling(404, `${endpoint} endpoint not found! `));
});

app.use(ErrorMiddleware);

module.exports = app;
