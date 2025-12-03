// const jwt = require("jsonwebtoken");

// // generate,decode,verify

// const value = {
//     name: "Prakhar",
//     password: 112233
// }

// //jwt is done by generate
// const token = jwt.sign(value, "secret");
// console.log(token);

// //verify
// const tokenstring = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUHJha2hhciIsInBhc3N3b3JkIjoxMTIyMzMsImlhdCI6MTc1OTQ5MzUxMH0.Ui4OlgO3-5I3UpGntkDX0rCGq6wF2ravaNQUkGL9KFM"
// const token = jwt.verify(tokenstring, "secret");
// console.log(token);


//this token has been generated using this secreat and hence this token can be verified using this secret
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUHJha2hhciIsInBhc3N3b3JkIjoxMTIyMzMsImlhdCI6MTc1OTQ5MzUxMH0.Ui4OlgO3-5I3UpGntkDX0rCGq6wF2ravaNQUkGL9KFM




// //TRY AND CATCH WORKS OR SYNTAX
// try{
//     let a;
//     console.log(a.length);
// }catch(e){
//     console.log("error occur")
// }

// console.log("hi teher")




//ASSIGNMENT
// 1 - Write a function that takes in a username and password and return a JWT token with the username encoded inside an object. Should return null if the username is not valid email or if the password is less than 6 characters. Try using the zod library here
// 2 - Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified) .Return false otherwise
// 3 - Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherwise

const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod")

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJWT(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({username}, jwtPassword);

    return signature;
}

// const ans = signJWT("Prakhar@gmail.com", "kjsdvk")
// console.log(ans);

function verifyJwt(token){
    let ans = true;
    try{
        jwt.verify(token, jwtPassword);
    } catch(e) {
        ans = false;
    }
    return ans;   
}

const ans = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUHJha2hhciIsInBhc3N3b3JkIjoxMTIyMzMsImlhdCI6MTc1OTQ5MzUxMH0.Ui4OlgO3-5I3UpGntkDX0rCGq6wF2ravaNQUkGL9KFM")
console.log(ans);


function decodeJwt(token){
    //true,false
    const decoded = jwt.decode(token); 
    if(decoded) {
        return true;
    } else {
        return false;
    }
}

// console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUHJha2hhciIsInBhc3N3b3JkIjoxMTIyMzMsImlhdCI6MTc1OTQ5MzUxMH0.Ui4OlgO3-5I3UpGntkDX0rCGq6wF2ravaNQUkGL9KFM"))

