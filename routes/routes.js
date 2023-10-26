// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controllers/controller.js');

// import module `signupController` from `../controllers/signupController.js`
const signupController = require('../controllers/signupController.js');

const loginController = require('../controllers/loginController.js');
const menuController = require('../controllers/menuController.js');
const orderController = require('../controllers/orderController.js');
const orderstatusController = require('../controllers/orderstatusController.js');
const staffloginController = require('../controllers/staffloginController.js');
const staffpageController = require('../controllers/staffpageController.js');

const app = express();

/*
    execute function getIndex()
    defined in object `controller` in `../controllers/controller.js`
    when a client sends an HTTP GET request for `/`
*/
app.get('/', controller.getIndex);
app.get('/index', controller.userIndex);

app.get('/login', loginController.getLogin);
app.post('/login', loginController.postLogin);

/*
    execute function getSignUp()
    defined in object `signupController` in `../controllers/signupController.js`
    when a client sends an HTTP GET request for `/signup`
*/
app.get('/signup', signupController.getSignUp);

/*
    execute function postSignUp()
    defined in object `signupController` in `../controllers/signupController.js`
    when a client sends an HTTP POST request for `/signup`
*/
app.post('/signup', signupController.postSignUp);
app.get('/menu', menuController.getMenu);

app.get('/order', orderController.getOrder);
app.get('/order-status', orderstatusController.getOrderStatus);

app.get('/staff-login', staffloginController.getStaffLogin);
app.post('/staff-login', staffloginController.postStaffLogin);

app.get('/staff-page', staffpageController.getStaffPage);
/*
    exports the object `app` (defined above)
    when another script exports from this file
*/
module.exports = app;