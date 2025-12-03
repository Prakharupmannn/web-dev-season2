// function calculateArithmetic(a,b,arthematicFinalFunction) {
//     const ans = arthematicFinalFunction(a,b)
//     return ans;
// }
// function sum(a,b) {
//     return a+b;
// }
// const value = calculateArithmetic(1,2,sum);
// console.log(value);
//in this fun if we call subtract then anotherfunction sub will calls and its a callback concept


// function greet() {
//     console.log("helloworld");
// }
// function greetAlient() {
//     console.log("helloworld");
// }
// //setTimeout(greetAlient, 3 * 1000)
// setInterval(greet, 1* 1000)

// function square(n){
//     return n*n;
// }

// function sumOfSomething(a, b, callbackfn) {
//     let square1 = callbackfn(a);
//     let square2 = callbackfn(b);
//     return square1 + square2;
// }

// let ans = sumOfSomething(1 , 2 ,square);
// console.log(ans);

function square(n) {
    return n*n;
}
function sumOfSomething(a, b) {
    let square1 = square(a);
    let square2 = square(b);
    return square1 + square2;
}
let ans = sumOfSomething(1 , 2);
console.log(ans);