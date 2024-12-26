const mongoose = require("mongoose");

const User = require("../models/userModel");

const orderSchema = new mongoose.Schema({
  users: { type: [mongoose.Schema.Types.ObjectId], ref: "User" },
  products: { type: [mongoose.Schema.Types.ObjectId], ref: "Product" },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
