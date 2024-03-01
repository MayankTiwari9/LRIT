// call
function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.fullName}.`);
  }
  
  const person = {
    fullName: 'Mayank TIwari'
  };
  
  greet.call(person, 'Rahul');
  // Output: Hello, Rahul! My name is Mayank TIwari.

  // apply
function greetings(name) {
    console.log(`Hello, ${name}! My name is ${this.fullName}.`);
  }
  
  const person2 = {
    fullName: 'Mayank TIwari'
  };
  
  greetings.apply(person2, ['Rahul']);
  // Output: Hello, Rahul! My name is Mayank TIwari.

// bind
function greet2(name) {
    console.log(`Hello, ${name}! My name is ${this.fullName}.`);
  }
  
  const person3 = {
    fullName: 'Mayank TIwari'
  };
  
  const greetPerson = greet2.bind(person3);
  greetPerson('Rahul');
  // Output: Hello, Rahul! My name is Mayank TIwari.
  
  