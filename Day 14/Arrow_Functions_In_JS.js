// Arrow Function without Parameters

const greet = () => {
  console.log("Hello, world!");
};

greet(); // Output: Hello, world!

// Arrow Function with Parameters

const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // Output: 5

// Arrow Function with a Single Parameter (Parentheses Optional)

const square = (num) => {
  return num * num;
};

console.log(square(4)); // Output: 16

// Arrow Function with Implicit Return

const multiply = (a, b) => a * b;

console.log(multiply(2, 4)); // Output: 8
