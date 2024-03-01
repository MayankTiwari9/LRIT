// Nested for loop to create a multiplication table:

console.log("Nested for loop to create a multiplication table");

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Skipping iterations with continue:

console.log("Skipping iterations with continue");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skip iteration when i is 3
  }
  console.log(i);
}

// Breaking out of the loop early with break:

console.log("Breaking out of the loop early with break");

for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    break; // Exit the loop when i is 4
  }
  console.log(i);
}