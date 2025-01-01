const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = "mongodb://localhost/start2impact";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database connection successful');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;