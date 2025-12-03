// function square(n) {
//     return n*n;
// }
// function cube(n) {
//     return n*n*n;
// }
// function sumofsquares(a , b) {
//     const val1 = square(a);
//     const val2 = square(b);

//     return val1 + val2;
// }
// function sumofcubes(a,b,c) {
//     const val1 = cube(a);
//     const val2 = cube(b);
//     const val3 = cube(c);

//     return val1 + val2 + val3;
// }
// console.log(sumofsquares(2,2));
// console.log(sumofcubes(2,2,2));


function square(n) {
    return n*n;
}
function cube(n) {
    return n*n*n;
}
function sumofsomething(a , b, callback) {
    console.log(a);
    console.log(callback);
    const val1 = callback(a);
    const val2 = callback(b);

    return val1 + val2;
}
console.log(sumofsomething(2,2,cube));
