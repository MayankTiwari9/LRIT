// flat
let nestedArray = [1, [2, [3, 4]]];
let flattenedArray = nestedArray.flat();

console.log(flattenedArray); // [ 1, 2, [ 3, 4 ] ]

// push 
let arr = [1, 2, 3];
arr.push(4, 5);

console.log(arr); // [ 1, 2, 3, 4, 5 ]

// unshift
let array = [3, 4, 5];
array.unshift(1, 2);

console.log(array); // [ 1, 2, 3, 4, 5 ]

// pop
let nums = [1, 2, 3];

console.log(nums.pop()); // 3

// shift

let shiftArr = [0, 1, 2, 3];

console.log(shiftArr.shift()); // 0

