// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');


const loginController= {

    getLogin: function (req, res) {
        res.render('login');
    },

    postLogin: async function (req, res) {

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
            var response = await db.findOne(User,user,'username position myOrder password');
            if (response != null && response.position != 'staff'){
                if(response.password == password){
                    var details = {
                        position: response.position,
                        active: 'index'
                    };
                    //response.active = 'index';
                    //res.locals.userposition = response.position;
                    res.render('index', details);
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
module.exports = loginController;