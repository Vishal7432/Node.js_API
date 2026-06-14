const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cskRouter = require("./api/router/csk");
const rcbRouter = require("./api/router/rcb");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {});

mongoose.connection.on("connected", () => {
  console.log("Connected with database successfully");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB:", err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/rcb", rcbRouter);
app.use("/csk", cskRouter);

app.use((req, res, next) => {
  res.status(404).json({
    error: "Url not found",
  });
});

module.exports = app;
