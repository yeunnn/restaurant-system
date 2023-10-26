// import module `database` from `../models/db.js`
const db = require('./models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('./models/UserModel.js'); 

db.connect();
add();
async function add(){
    var UserSchema = {
        username: 'user123',
        password: 'userpass123',
        position: 'customer',
        myOrder: [
        {
            food: 'text',
            quantity: 1,
            price: 10,
            id: 1
        }
        ]
    }

    var response = await db.insertOne(User, UserSchema);
    if(response){
        console.log("added 1 doc");
    }else{
        console.log("failed");
    }
    
    var UserSchema = {
        username: 'john',
        password: 'computer123',
        position: 'customer',
        myReservations: [
        {
            food: 'text',
            quantity: 1,
            price: 10,
            id: 1
        }
        ]
        }

    var response = await db.insertOne(User, UserSchema);
    if(response) {
        console.log("added 1 doc");
    } else{
        console.log("failed");
    }

    var UserSchema = {
        username: 'arren',
        password: 'CCAPDEV_prof',
        position: 'staff',
        myReservations: null
    }

    var response = await db.insertOne(User, UserSchema);
    if(response){
        console.log("added 1 doc");
    }else{
        console.log("failed");
    }
}
