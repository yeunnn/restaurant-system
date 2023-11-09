// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const Order = require('../models/OrderModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `profile` paths in the server
*/
const orderstatusController = {

    getOrderStatus: async function (req, res) {
        var projection = 'items orderType status orderID';

        var result = await db.findMany(Order, {}, projection);
        //result.active = "order-status";
        //console.log(result);
        // Assuming `results` is an array of orders
        result.sort((a, b) => b.orderID - a.orderID);

        //res.render('order-status', { result: results });

        res.render('order-status', {result, active:'order-status'});
    }
}

/*
    exports the object `profileController` (defined above)
    when another script exports from this file
*/
module.exports = orderstatusController;