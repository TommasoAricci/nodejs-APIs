const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const orderRoute = require('./routes/orderRoute');

app.use(express.json());

app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/order', orderRoute);

module.exports = app;