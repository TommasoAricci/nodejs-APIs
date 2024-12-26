// getting model

const Order = require("../models/orderModel");
const Product = require("../models/productModel");

// creating new order

const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    const populatedOrder = await Order.findById(order._id)
      .populate("users")
      .populate("products");
    res.status(200).json(populatedOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// modifying order

const modifyOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    const populatedOrder = await Order.findById(order._id)
      .populate("users")
      .populate("products");
    res.status(200).json(populatedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

// deleting order

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

// get all orders

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("users").populate("products");
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

// order by newer date

const getOrderByRecentDate = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("users")
      .populate("products")
      .sort({ date: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

// order by older date

const getOrderByOldDate = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("users")
      .populate("products")
      .sort({ date: +1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

// order by product

const getOrderByProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ name: req.params.name });

    if (product) {
      const orders = await Order.find({ products: product._id })
        .populate("users")
        .populate("products");
      res.status(200).json(orders);
    } else {
      res.status(400).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
  
};
module.exports = {
  createOrder,
  modifyOrder,
  deleteOrder,
  getAllOrders,
  getOrderByRecentDate,
  getOrderByOldDate,
  getOrderByProduct,
};
