"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function doSomething(keypressed) {
    if (keypressed == Direction.Left) {
    }
}
doSomething(Direction.Right);
doSomething(Direction.Down);
console.log(Direction.Down);
console.log(Direction.Up);
//# sourceMappingURL=a.js.map