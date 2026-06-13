const express = require("express");
const router = express.Router();
const CSK = require("../models/csksSchema");
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  CSK.find()
    .then((csks) => {
      res.status(200).json({
        message: "CSKs retrieved successfully",
        data: csks,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error retrieving CSKs",
        error: error,
      });
    });
});

router.post("/", (req, res) => {
  const { _id, fullName, email, number, coachName } = req.body;

  const newCSK = new CSK({
    _id,
    fullName,
    email,
    number,
    coachName,
  });

  newCSK
    .save()
    .then((savedCSK) => {
      console.log("CSK added successfully:", savedCSK);
      res.status(201).json({
        message: "CSK added successfully",
        data: savedCSK,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error adding CSK",
        error: error,
      });
    });
});

module.exports = router;
