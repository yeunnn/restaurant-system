// import module `database` from `../models/db.js`
const db = require('../models/db.js');

const Order = require('../models/OrderModel.js');

const menuController = {
  getMenu: async function (req, res) {
    var details = {
      active: 'menu'
    };
    res.render('menu', details);
  },

  submitOrder: async function (req, res) {
    const orderItems = req.body.orderItems;
    const tableNo = req.body.tableNo;
    const totalPrice = req.body.totalPrice;

    try {
      const order = new Order({
        items: orderItems,
        total: totalPrice,
        tableNo: tableNo
      });

      // Change the line below to await the `order.save()` method
      await order.save();

      // Code to clear cart or perform other necessary actions

      // Send a success status of 201 (Created) instead of 200 (OK)
      res.status(201).json({ message: 'Order submitted successfully' });
    } catch (err) {
      // Log the error for debugging purposes
      console.error(err);
      res.status(500).json({ error: 'An error occurred while submitting the order' });
    }
  }
};

function calculateTotal(orderItems) {
  let total = 0;
  for (const item of orderItems) {
    total += item.price * item.quantity;
  }
  return total;
}

module.exports = menuController;