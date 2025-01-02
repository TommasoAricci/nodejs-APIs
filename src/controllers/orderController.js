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

// filter

const getOrders = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const ordersPerPage = parseInt(req.query.limit) || 2;
    const { productId, date } = req.query;
    const filter = {};

    // productId

    if (productId) {
      filter.products = productId;
    }

    // date

    if (date) {
      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(startDate);
      endDate.setHours(23, 59, 59, 999);

      filter.date = { $gte: startDate, $lt: endDate };
    }

    // get orders

    const orders = await Order.find(filter)
      .skip(page * ordersPerPage)
      .limit(ordersPerPage)
      .populate("users")
      .populate("products");

    res.status(200).json(orders);

  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = {
  createOrder,
  modifyOrder,
  deleteOrder,
  getOrders,
};
