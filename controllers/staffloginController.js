// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

// import module `User` from `../models/UserModel.js`
const Order = require('../models/OrderModel.js');

const staffloginController= {

    getStaffLogin: function (req, res) {
        res.render('staff-login');
    },

    postStaffLogin: async function (req, res) {

            /*
                when submitting forms using HTTP POST method
                the values in the input fields are stored in `req.body` object
                each <input> element is identified using its `name` attribute
                Example: the value entered in <input type="text" name="fName">
                can be retrieved using `req.body.fName`
            */
            var username = req.body.username;
            var password = req.body.password;
                
            var user = {
                username: username
            };
            var response = await db.findOne(User,user,'username password position');
            if (response != null && (response.position == 'Admin' || response.position == 'Staff' || response.position == 'Customer')){
                if(response.password == password){
                    // Store user information in the session
                    req.session.user = response.username;
                    req.session.position = response.position;

                    if(response.position == 'Customer') {
                        res.render('index', {active:'index', position:response.position});
                    }
                    else{
                        var projection = 'items orderType status orderID';

                        var result = await db.findMany(Order, {}, projection);

                        // Assuming `results` is an array of orders
                        result.sort((a, b) => b.orderID - a.orderID);

                        res.render('staff-page', {result, active:'staff-page', position:response.position});
                    }
                }else{
                    res.render('error',{error:'Wrong password.'});
                }
            }else{
                res.render('error',{error:'This user was not found.'});
            }
        
            /*
            upon adding a user to the database,
            redirects the client to `/success` using HTTP GET,
            defined in `../routes/routes.js`
            passing values using URL
            which calls getSuccess() method
            defined in `./successController.js`

            if(response != null){
                res.redirect('/success?fName=' + fName +'&lName=' + lName + '&idNum=' + idNum);
            }
            else {
                res.render('error');
            }
        */
    }
}

/*
    exports the object `signupController` (defined above)
    when another script exports from this file
*/
module.exports = staffloginController;