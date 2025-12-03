//fetch , .then function
// function getAnimalData() {
//     fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
//     .then(function(response) {
//         response.json()
//         .then(function(finalData) {
//             console.log(finalData);
//         })
//     })
// }


//asyn await function
// async function getAnimalData() {
//     const response = await fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
//     const finalData = await response.json()
//     console.log(finalData)
// }


// authentication assignment
// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();
// app.use(express.json());

// const ALL_USERS = [
//     {
//         username: "harkirat@gmail.com",
//         password: "123",
//         name: "harkirat Singh",
//     },
//     {
//         username: "rat@gmail.com",
//         password: "345",
//         name: "rat Singh",
//     },
//     {
//         username: "hari@gmail.com",
//         password: "123321",
//         name: "hari Singh",
//     },
// ];
// function userExists(username, password) {
//     //write a logic to return true or false if this user exists
//     //in ALL_USERS array
//     //hard todo - try to use the find function in js
//     let userExists = false;
//     for(let i=0; i<ALL_USERS.length; i++){
//         if(ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
//             userExists = true;
//         }
//     }
//     return userExists;
// }
// app.post("/signin", function(req, res) {
//     const username = req.body.username;
//     const password = req.body.password;

//     if(!userExists(username, password)) {
//         return res.status(403).json({
//                 msg:"Users doesn't exist in our in memory bd",
//         });
//     }
//     var token = jwt.sign({ username: username}, jwtPassword);
//     return res.json({
//         token,
//     });
// });


// app.get("/Users", function(req, res) {
//     const token = req.headers.authorization;
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     //return a list of users other than this username
//     res.json({
//         users: ALL_USERS.filter(function(value) {
//             if(value.username == username) {
//                 return false
//             } else {
//                 return true;
//             }
//         })
//     }); 
// });

// app.listen(3000);


// mongoose database
const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json())

mongoose.connect("mongodb+srv://upmanjiprakhar_db_user:kJpK0EilwjcFb8qr@cluster0.1ju9teh.mongodb.net/local")

const user = mongoose.model('user', { name : String, email : String, password: String });

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});
    //CRUD => create, update, delete, read
    if(existingUser){
        return res.status(400).send("username already exists");
    }

    const User = new user({
        name: 'Prakhar Upman',
        email: 'teff@gmail.com',
        password: '123456'
    });

User.save();
res.json({
    "msg":"User created successfully"
})
})