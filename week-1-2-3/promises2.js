// var d = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve("LOoo");
//     }, 1000)
// });

// function callback() {
//     console.log(d);
// }
// console.log(d);
// d.then(callback);


// let p = new Promise(function(resolve) {
//     resolve("hi there");
// });
// p.then(function(){
//     console.log(p);
// })


//async code which we convert in to promise
// function asyncFunction(callback, duration) {
//     setTimeout(function() {
//         callback();
//     }, duration);
// }
// myOwnSetTimeout(function() {
//    console.log("after setTimeout");
// },10000);    


function promisifiedMyOwnSetTimeout(duration) {
    const p = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, duration);
});
    return p;
}

//promise
const ans = promisifiedMyOwnSetTimeout(3000);
ans.then(function() {
    console.log("timeout is done");
});
