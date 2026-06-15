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

router.get("/:id", (req, res) => {
  const cskId = req.params.id;
  CSK.findById(cskId)
    .then((csk) => {
      if (!csk) {
        return res.status(404).json({
          message: "CSK not found",
        });
      }
      res.status(200).json({
        message: "CSK retrieved successfully",
        data: csk,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error retrieving CSK",
        error: error,
      });
    });
});

router.delete("/:id", (req, res) => {
  const cskId = req.params.id;
  CSK.findByIdAndDelete(cskId)
    .then((deletedCSK) => {
      if (!deletedCSK) {
        return res.status(404).json({
          message: "CSK not found",
        });
      }
      res.status(200).json({
        message: "CSK deleted successfully",
        data: deletedCSK,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error deleting CSK",
        error: error,
      });
    });
});

router.put("/:id", (req, res) => {
  const cskId = req.params.id;
  const { fullName, email, number, coachName } = req.body;
  CSK.findByIdAndUpdate(
    cskId,
    { fullName, email, number, coachName },
    { new: true }
  )
    .then((updatedCSK) => {
      if (!updatedCSK) {
        return res.status(404).json({
          message: "CSK not found",
        });
      }
      res.status(200).json({
        message: "CSK updated successfully",
        data: updatedCSK,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error updating CSK",
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
