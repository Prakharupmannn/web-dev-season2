//enum

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// function doSomething(keypressed: Direction) {
//   if (keypressed == Direction.Left) {

//   }
// }

// doSomething(Direction.Right);
// doSomething(Direction.Down);
// console.log(Direction.Down);
// console.log(Direction.Up)





// //generics
// type Element = number | string

// function firstEl(arr: Element[]) {
//     return arr[0]
// }

// const value = firstEl(["heheh", "Singh"]);
// console.log(value.toUpperCase());

//so for this code we use generics

// function identity<T>(arg: T) {
//     return arg;
// }

// let output1 = identity<string>("my string");
// let output2 = identity<number>(1001);


// console.log(output1.toUpperCase());


function identity<T>(arr: T[]): T {
    return arr[0];
}

const output1 = identity(["mystring"]);
let output2 = identity([1001]);


console.log(output1.toUpperCase());