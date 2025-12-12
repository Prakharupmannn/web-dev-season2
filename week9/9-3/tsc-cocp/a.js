"use strict";
//enum
Object.defineProperty(exports, "__esModule", { value: true });
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
function identity(arg) {
    return arg;
}
let output1 = identity("my string");
let output2 = identity(1001);
console.log(output1.toUpperCase());
//# sourceMappingURL=a.js.map