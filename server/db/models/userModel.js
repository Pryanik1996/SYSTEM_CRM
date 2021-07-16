const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
    unique: true,
  },
  password: {
    type: String,
    // required: true,
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
  picture: {
    type: String,
  },
});

userSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", userSchema);
