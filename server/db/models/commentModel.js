const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  body: {
    type: String,
    requried: true,
  },
  date: {
    type: String,
    requried: true,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
