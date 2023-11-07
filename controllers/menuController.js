// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');
// import module `Order` from `../models/OrderModel.js`
const Order = require('../models/OrderModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `profile` paths in the server
*/
const menuController = {
  getMenu: async function (req, res) {
    var details = {
      active: 'menu'
    };
    res.render('menu', details);
  },
  
  submitOrder: async function (req, res) {
    // Retrieve the order items from the request body
    const orderItems = req.body.orderItems;
    // Retrieve the table number from the request body
    const tableNo = req.body.tableNo;
    
    try {
      // Create a new order
      const order = new Order({
        items: orderItems,
        tableNo: tableNo,
        total: calculateTotal(orderItems) // Calculate the total price of the order
      });
      
      // Save the order to the database
      await order.save();
      
      // Clear the cart or perform any other necessary actions
      
      // Send a response indicating that the order was successfully submitted
      res.status(200).json({ message: 'Order submitted successfully' });
    } catch (err) {
      // Handle any errors that occur during the order submission process
      res.status(500).json({ error: 'An error occurred while submitting the order' });
    }
  }
};

/*
    exports the object `menuController` (defined above)
    when another script exports from this file
*/
module.exports = menuController;

// Helper function to calculate the total price of the order
function calculateTotal(orderItems) {
  let total = 0;
  for (const item of orderItems) {
    total += item.price * item.quantity;
  }
  return total;
}