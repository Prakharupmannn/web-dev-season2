//map,filter and arrow function

//ARROW FUNCTION
// function sum(a,b) {
//     return a+b;
// }
// const sum = (a, b) => {
//     return a+b;
// }
// const ans = sum(1,2);
// console.log(ans);


//MAP FUNCTION

// const input = [1, 2, 3, 4, 5];
//solution
// const newarray = [];
// for(let i=0;i<input.length;i++) {
//     newarray.push(input[i] * 2);
// }
// console.log(newarray);
//other  solution
// function transform(i) {
//     return i*2;
// }
// const ans = input.map(transform);
// console.log(ans);

// // or
// const ans = input.map(function(i) {
//     return i*2;
// });
// console.log(ans);


// const arr = [1, 2, 3, 4, 5];
// function transformation(i) {
//     return i*3;
// }
// const ans = arr.map(transformation);
// console.log(ans);


//filter function
// solution
const arr = [1,2,3,4,5]

// const newArr = [];
// for(let i=0;i<arr.length;i++) {
//     if(arr[i] % 2 == 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

//other solution
// function filterfunction(n){
//     if(n%2 == 0) {
//         return true;
//     } else{
//         return false;
//     }
// }
// const ans = arr.filter(filterfunction);
// console.log(ans);

// or
const ans = arr.filter(function(n) {
    if(n%2==0){
        return true;
    }else {
        return false;
    }
});
console.log(ans);