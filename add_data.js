// import module `database` from `../models/db.js`
const db = require('./models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('./models/UserModel.js'); 

db.connect();
add();
async function add(){
    var UserSchema = {
        username: 'SampleAdmin1',
        password: 'admin12345',
        position: 'Admin'
    }

    var response = await db.insertOne(User, UserSchema);
    if(response){
        console.log("added 1 doc");
    }else{
        console.log("failed");
    }
    
    var UserSchema = {
        username: 'SampleStaff1',
        password: 'staff12345',
        position: 'Staff'
    }

    var response = await db.insertOne(User, UserSchema);
    if(response) {
        console.log("added 1 doc");
    } else{
        console.log("failed");
    }

    var UserSchema = {
        username: 'SampleCustomer1',
        password: 'customer12345',
        position: 'Customer'
    }

    var response = await db.insertOne(User, UserSchema);
    if(response) {
        console.log("added 1 doc");
    } else{
        console.log("failed");
    }
}
