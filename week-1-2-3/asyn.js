// function findSum(n) {
//     let ans = 0;
//     for(let i=0;i<n;i++) {
//         ans += i;
//     }
//     return ans;
// }
// function findSumTill10000() {
//     console.log(findSum(100));
// }
// function findSumTill20000() {
//     console.log(findSum(100));
// }
// setTimeout(findSumTill10000, 1000); // calling a async fun which means after 1 sec its going to a call a function its willl not being waiting for any one 
// setTimeout(findSumTill20000, 2000);//2000shows seconds
// console.log("hello world");


// function onDone() {
//     console.log("hi there");
// }
// setTimeout(onDone, 1000);
// console.log("after setTimeout");

// for(let i=0;i<10000000;i++){

// }


console.log("hi");

setTimeout(function() {
    console.log("hi there from inside");
}, 5000);

let a = 0;
for (let i = 0; i < 10; i++) { 
    a = a + i;
}
console.log("After")
