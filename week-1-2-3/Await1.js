function kiratsAsyncfunction() {
    let p = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("hi there");
        }, 1000)
    });
    return p;
}

async function main() {
    //no callbacks , no .then syntax
    let value = await kiratsAsyncfunction();
    console.log(value);
}
main();
console.log("after main");