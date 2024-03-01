// Break Statement

console.log("for loop");
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // exit the loop when i is 3
    }
    console.log(i);
}

// Output: 0, 1, 2

console.log("while loop");
let i = 0;

while (i < 5) {
    if (i === 3) {
        break; // exit the loop when i is 3
    }
    console.log(i);
    i++;
}

// Output: 0, 1, 2

console.log("do-while loop");

let j = 0;

do {
    if (j === 3) {
        break; // exit the loop when i is 3
    }
    console.log(j);
    j++;
} while (j < 5);

// Output: 0, 1, 2
