// Traditional function expression
const add = function (a, b) {
  return a + b;
};

// Arrow function equivalent
const addArrow = (a, b) => a + b;

console.log(add(2, 3)); // Output: 5
console.log(addArrow(2, 3)); // Output: 5

// Arrow Function with Array Map
const numbers = [1, 2, 3, 4, 5];

// Traditional function expression using map
const squared1 = numbers.map(function (num) {
  return num * num;
});

// Arrow function with map
const squared2 = numbers.map((num) => num * num);

console.log(squared1); // Output: [1, 4, 9, 16, 25]
console.log(squared2); // Output: [1, 4, 9, 16, 25]

// Arrow Function with Object Literal
// Traditional function expression to create an object
const createPerson = function (name, age) {
    return { name: name, age: age };
  };
  
  // Arrow function with object literal
  const createPersonArrow = (name, age) => ({ name, age });
  
  console.log(createPerson("Mayank", 23));          // Output: { name: 'Mayank', age: 23 }
  console.log(createPersonArrow("Mayank", 23));     // Output:   { name: 'Mayank', age: 23 }
  
