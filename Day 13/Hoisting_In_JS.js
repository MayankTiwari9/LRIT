// Variable hoisting with var

console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// function hoisting

sayHello(); // Output: "Hello, world!"

function sayHello() {
  console.log("Hello, world!");
}

// Function Expressing Hoisting

// This would result in an error
// sayHi(); // TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};

sayHi(); // This works fine

// let and const hoisting

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // Output: 10

