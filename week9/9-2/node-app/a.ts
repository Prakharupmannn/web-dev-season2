// const x : number = 10;
// const y: string = "hello"
// console.log(x);


// function greet(firstName: string) {
//     console.log("Hello" + firstName);
// }

// greet("harkirat")



// function sum(a:number , b: number) {
//     return a+b;
// }
// const value = sum(2,3)
// console.log(value)


// function islegal(age: number) {
//     if(age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let x = islegal(10)




// function runsAter1(fn: () => void) {
//     setTimeout(fn, 1000)
// }

// runsAter1(function() {
//     console.log("hehehe")
// })

interface User {
    firstName: "pra";
    lastName: "UPM";
    email: "um@gmail";
    age: 22;
}

function isLegal(user: User) {
    if(user.age > 18) {
        return true;
    } else{
        return false;
    }
}
function greet(user: User) {
    console.log("hiiii" + user.firstName)
}

isLegal({
    firstName: "pra",
    lastName: "UPM",
    email: "um@gmail",
    age: 22
})