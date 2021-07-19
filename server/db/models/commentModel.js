const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
  author: {
    type: String,
  },
  authorName: {
    type: String,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  card: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  }
});

module.exports = mongoose.model("Comment", commentSchema);
