// getting model

const Product = require("../models/productModel");

// creating new product

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

// modifing product

const modifyProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

// deleting product

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = { createProduct, modifyProduct, deleteProduct };
