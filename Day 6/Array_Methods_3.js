// splice
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 'a', 'b');

console.log(arr); //[ 1, 2, 'a', 'b', 4, 5 ]

// slice
let nums = [1, 2, 3, 4, 5];
let sliced = nums.slice(1, 3);

console.log(sliced); // [2, 3]

// reduce 
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, currValue) => acc + currValue );

console.log(sum); // 10

// map
let arr1 = [1, 2, 3];
let doubled = arr1.map((ele) => ele * 2 );

console.log(doubled); // [2, 4, 6]

// filter
let arr2 = [1, 2, 3, 4, 5];
let eveNumbers = arr.filter(ele => ele % 2 === 0);

console.log(eveNumbers); // [2, 4]