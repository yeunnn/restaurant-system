// import module `express`
const express = require('express');
const bodyParser = require('body-parser');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controllers/controller.js');

// import module `signupController` from `../controllers/signupController.js`
const menuController = require('../controllers/menuController.js');
const orderreceiptController = require('../controllers/orderreceiptController.js');
const orderstatusController = require('../controllers/orderstatusController.js');
const staffloginController = require('../controllers/staffloginController.js');
const staffpageController = require('../controllers/staffpageController.js');

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

/*
    execute function getIndex()
    defined in object `controller` in `../controllers/controller.js`
    when a client sends an HTTP GET request for `/`
*/
app.get('/', controller.getIndex);
app.get('/index', controller.userIndex);

//Menu Controller
app.get('/menu', menuController.getMenu);
app.post('/submit-order', menuController.submitOrder);

app.get('/order-receipt', orderreceiptController.getOrderReceipt);
app.get('/order-status', orderstatusController.getOrderStatus);

app.get('/staff-login', staffloginController.getStaffLogin);
app.post('/staff-login', staffloginController.postStaffLogin);

app.get('/staff-page', staffpageController.getStaffPage);
/*
    exports the object `app` (defined above)
    when another script exports from this file
*/
module.exports = app;