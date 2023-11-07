var mongoose = require('mongoose');

var orderItemSchema = new mongoose.Schema({
  food: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

var OrderSchema = new mongoose.Schema({
  items: [orderItemSchema],
  total: {
    type: Number,
    required: true
  },
  tableNo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Order', OrderSchema);