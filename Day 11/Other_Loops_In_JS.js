// do-while loop

console.log("do-while loop");

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

//for-in loop

console.log("for - in loop");

const person = {
  name: "John",
  age: 30,
  job: "Developer",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// for-of

console.log("for - of loop");

const fruits = ["apple", "banana", "orange", "grape"];

for (let fruit of fruits) {
  console.log(fruit);
}
