// function sum(a , b) {
//     return a + b;
// }
// const value = sum(1,4);
// const value2 = sum(4,4);
// console.log(value , value2);


function sum(num1 , num2 , fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
    //return result;
}
function displayResult(data) {
    console.log("result of the sum is : " + data);
}
function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}
//you are only allowed to call one function after this
const ans = sum(1,2,displayResult);
//callbacks is basically the fnToCall
//displayResult(ans);