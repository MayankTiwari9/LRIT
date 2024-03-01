// 'this' with arrow function  (inheritence of 'this')

function regularFunction() {
    // 'this' refers to the object calling regularFunction
    setTimeout(function() {
      // 'this' refers to the global object (or undefined in strict mode)
    }, 1000);
  }
  
  const arrowFunction = () => {
    // 'this' refers to the object calling arrowFunction
    setTimeout(() => {
      // 'this' also refers to the object calling arrowFunction
    }, 1000);
  };
  
// with Regular Function (Binding in regular function)

function regularFunction() {
    // 'this' refers to the object calling regularFunction
    this.value = 42;
  
    // Within setTimeout, 'this' refers to the object calling regularFunction
    setTimeout(function() {
      console.log(this.value); // Outputs 42
    }, 1000);
  }
  
