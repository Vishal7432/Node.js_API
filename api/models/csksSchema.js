const mongoose = require("mongoose");
const csksSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  coachName: {
    type: String,
    required: true,
  },
});

const CSK = mongoose.model("CSK", csksSchema);
module.exports = CSK;
