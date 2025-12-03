//JSON.parse
//JSON.stringify
// const users = {
//     name: "Prakhar",
//     age: 22,
//     gender: "male",
// }
// users["name"];
// const finalString = JSON.stringify(users);
// console.log(users["name"]); 


const users = {
    name: "Prakhar",
    age: 22,
    gender: "male",
};
const finalString = JSON.stringify(users);// Convert object to JSON string
const parsed = JSON.parse(finalString);// Convert string back to object
console.log(parsed["gender"]); 
