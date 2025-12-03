const currentDate = new Date();

// console.log(currentDate.getMonth() + 1);
// console.log(currentDate.getDate());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getHours());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMinutes());


//Setting Components of the date
// currentDate.setFullYear(2025);
// console.log("After setFullYear: ", currentDate);

// console.log("Time in milliseconds since 1970 : ", currentDate.getTime());

// function calculateSum(n) {
//     let a = 0;
//     for(let i=0; i<n; i++){
//         a = a + i;
//     }
//     return a;
// }

// const beforeDate = new Date();
// const beforeTimeInMs = beforeDate.getTime();
// calculateSum(1000000);
// const AfterDate = new Date();
// const AfterTimeInMs = AfterDate.getTime();
// console.log(AfterTimeInMs - beforeTimeInMs);\


function currentTimePrint() {
    console.log(new Date().getTime());
}
setInterval(currentTimePrint, 1000);