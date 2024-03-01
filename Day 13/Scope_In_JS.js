// Global Scope

let globalVar = "I'm a global variable";

function exampleFunction1() {
  console.log(globalVar); // Accessible inside the function
}

exampleFunction1();
console.log(globalVar); // Accessible outside the function

// Local Scope

function exampleFunction2() {
  let localVar = "I'm a local variable";
  console.log(localVar); // Accessible inside the function
}

exampleFunction2();
// console.log(localVar); // This line would result in an error;
// localVar is not defined outside the function


// Lexical Scope (closure)

function outerFunction() {
    let outerVar = "I'm from outer function";
  
    function innerFunction() {
      console.log(outerVar); // Accessible inside the inner function due to lexical scope
    }
  
    innerFunction();
  }
  
  outerFunction();
  
