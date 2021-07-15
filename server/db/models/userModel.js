const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 1,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isUser: {
    type: Boolean,
    default: true,
  },
  googleId: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
