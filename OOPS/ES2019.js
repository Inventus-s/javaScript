// Array.prototype.{flat,flatMap}

const std = [
    [1],[2],[3],[4,[5,6]]
]

// console.log(Object.fromEntries(std));

console.log(std.flat());
console.log(std.flat(2));
console.log(std.flat(Infinity));

// Object.fromEntries() --> come back from array to object
const person = {name:'fred',age:26}
let arr = Object.entries(person);
console.log(arr);
console.log(Object.fromEntries(arr));