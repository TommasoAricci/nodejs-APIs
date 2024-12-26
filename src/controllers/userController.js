// getting model

const User = require("../models/userModel");

// creating new user

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

// modifying user

const modifyUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

// deleting user

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = { createUser, modifyUser, deleteUser };
