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
  username: {
    type: String,
    required: true,
  },
});
const adminForm = mongoose.model("teacher", loginSchema);

module.exports = adminForm;
