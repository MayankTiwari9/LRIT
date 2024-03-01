// Object literal
let person_one = {
  name: "Mayank Tiwari",
  age: 23,
  isStudent: true,
};

console.log(person_one); // { name: 'John Doe', age: 25, isStudent: true }

// Constructor Functions
function Person(name, age, isStudent) {
  this.name = name;
  this.age = age;
  this.isStudent = isStudent;
}

let person_Two = new Person("Mayank Tiwari", 23, true);
console.log(person_Two); //{ name: 'Mayank Tiwari', age: 23, isStudent: true }

// Object.create()
let personPrototype = {
  sayHello: function () {
    console.log("Hello!");
  },
};

let person_three = Object.create(personPrototype);
person_three.name = "Mayank Tiwari";
person_three.age = 23;
person_three.isStudent = true;

console.log(person_three.name); // Mayank Tiwari
console.log(person_three.age); // 23
console.log(person_three.isStudent); // true

person_three.sayHello(); // Hello!
