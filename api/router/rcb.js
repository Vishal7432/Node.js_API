const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the RCB team!, this is get request",
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the RCB team!, this is post request",
  });
});

module.exports = router;
