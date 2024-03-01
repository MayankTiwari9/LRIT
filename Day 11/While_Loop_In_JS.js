// Counting from 1 to 5:

console.log('Counting from 1 to 5:- ');

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Counting backward from 3 to 1:

console.log("Counting backward from 3 to 1:- ");

let count = 3;
while (count >= 1) {
  console.log(count);
  count--;
}

// Summing numbers until a certain threshold is reached:

console.log('Summing numbers until a certain threshold is reached:- ');

let sum = 0;
let num = 1;
while (sum < 10) {
  sum += num;
  num++;
}
console.log(sum);

// Generating random numbers until a certain condition is satisfied:

console.log("Generating random numbers until a certain condition is satisfied:- ");

let randomNum;
while (true) {
  randomNum = Math.floor(Math.random() * 10) + 1;
  console.log(randomNum);
  if (randomNum === 5) {
    break; // Exit the loop if a random number is 5
  }
}

// Checking array elements using a while loop:

console.log("Checking array elements using a while loop:- ");

const numbers = [2, 4, 6, 8, 10];
let index = 0;
while (index < numbers.length) {
  console.log(numbers[index]);
  index++;
}