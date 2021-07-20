const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  name: {
    type: String
  },
  surname: {
    type: String,
  },
  patronymic: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  address: {
    type: String,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isDelete: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Client", clientSchema);
