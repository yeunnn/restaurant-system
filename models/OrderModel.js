const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  food: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  items: [orderItemSchema],
  total: {
    type: Number,
    required: true,
  },
  tableNo: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;