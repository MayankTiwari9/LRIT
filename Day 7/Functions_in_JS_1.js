// Function Declaration
function greetings(name){
    console.log('Hello, ' + name + '!');
}

greetings('Mayank');  // Hello, Mayank!

// Function Expression
let greet = function(name){
    console.log('Hello, ' + name + '!');
}

greet('Mayank');  // Hello, Mayank!

// Arrow Functions
const car = (name) => {
    console.log('Car ' + name + ' Has 4 wheels!');
}
car('Fortuner'); //Car Fortuner Has 4 wheels!

// Parameter and return value
function add(x, y){
    return x + y;
}

const result = add(3, 5);

console.log(result); // 8