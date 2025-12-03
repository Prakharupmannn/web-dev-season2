// const ages = [ 22,23,24,25,27,100];
// const numberOfPeople = ages.length;
// for(let i=0;i<numberOfPeople;i++) {
//     if(ages[i] % 2 == 0) {
//         console.log(ages[i]);
//     } 
// }


// const biggestnumber = [11,22,33,44];
// const max = Math.max(...biggestnumber);
// console.log(max);

//by array
// const personArray = ["omi","sai","ramya"];
// const genderArray = ["Male","Male","Female"];

// for(let i=0;i<personArray.length;i++) {
//     if(genderArray[i] == "Male") {
//         console.log(personArray[i]);
//     }
// }


//by creating an object
const allUsers = [{
    firstname: "omi",gender: "male"
},{
    firstname: "rahul",gender: "male"
},{
    firstname: "riya",gender: "female"
}]
for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"] == "male") {
        console.log(allUsers[i]["firstname"]);
    }
}


//reverse
const arr = [1,2,3,4,5];
arr.reverse();
console.log(arr);