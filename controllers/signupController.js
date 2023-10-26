// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `signup` paths in the server
*/
const signupController = {

    /*
        executed when the client sends an HTTP GET request `/signup`
        as defined in `../routes/routes.js`
    */
    getSignUp: function (req, res) {
        res.render('signup');
    },

    /*
        executed when the client sends an HTTP POST request `/signup`
        as defined in `../routes/routes.js`
    */
    postSignUp: async function (req, res) {

        /*
            when submitting forms using HTTP POST method
            the values in the input fields are stored in `req.body` object
            each <input> element is identified using its `name` attribute
            Example: the value entered in <input type="text" name="fName">
            can be retrieved using `req.body.fName`
        */
            var position = 'customer';
            var username = req.body.username;
            var password = req.body.password;
            var confirmpassword = req.body.confirmpassword;
            var user = {
                username: username,
                password: password,
                position: position,
                myOrder:null
            };
            var usercheck = {
                username:username
            }
            var check = await db.findOne(User,usercheck,'username');
            if(await check == null){
                if(password == confirmpassword){
                    /*
                        calls the function insertOne()
                        defined in the `database` object in `../models/db.js`
                        this function adds a document to collection `users`
                    */
                    var response = await db.insertOne(User,user);
                    if(response){
                        res.render('login');
                    }else{
                        res.render('error',{error:'Database error.'});
                    }
                }else{
                    res.render('error',{error:'Password and confirm password do not match.'});
                }
            }else{
                res.render('error',{error:'This username is already registered.'});
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
module.exports = signupController;