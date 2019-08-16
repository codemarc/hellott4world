
// Imaging a Javascript Enumeration
// enum Direction { Up = 1, Down, Left, Right }

var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up"
    Direction[Direction["Down"] = 2] = "Down"
    Direction[Direction["Left"] = 3] = "Left"
    Direction[Direction["Right"] = 4] = "Right"
})(Direction || (Direction = {}));

module.exports = {
    hello: () => 'Hello T4Template world',
    arrow: (way) => Direction[way]
}

// Look what I can do...
// console.log(module.exports.hello())
// console.log(module.exports.arrow("Up"))
// console.log(module.exports.arrow("Down"))
// console.log(module.exports.arrow(3))
// console.log(module.exports.arrow(4))
