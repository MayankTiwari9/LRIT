// ES6 Class
class Person {
  constructor(name, age, isStudent) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
  }

  sayHello() {
    console.log("Hello!");
  }
}

let person = new Person("Mayank Tiwari", 23, true);

console.log(person.name); // Mayank Tiwari
console.log(person.age); // 23
console.log(person.isStudent); // true

person.sayHello(); // Hello!

// Object.assign()
let person_two = {};
Object.assign(person_two, { name: 'Mayank Tiwari', age: 23, isStudent: true });

console.log(person_two.name); // Mayank Tiwari
console.log(person_two.age); // 23
console.log(person_two.isStudent); // true

