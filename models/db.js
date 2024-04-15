const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  rollno: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  marksm1: {
    type: Number,
  },
  attendence: {
    type: Number,
  },
});
const Loginform = mongoose.model("student", loginSchema);

module.exports = Loginform;
