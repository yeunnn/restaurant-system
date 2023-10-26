// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `profile` paths in the server
*/
const orderstatusController = {

    getOrderStatus: async function (req, res) {
        var details = {
            position: 'customer',
            active:'order-status'
        };
        res.render('order-status',details);
    }
}

/*
    exports the object `profileController` (defined above)
    when another script exports from this file
*/
module.exports = orderstatusController;