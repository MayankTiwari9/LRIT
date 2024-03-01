// Default Parameter
function greet(name = 'Mayank'){
    console.log('Hello, ' + name +  '!');
}

greet(); // Hello, Mayank!

// Rest Parameter
function sum(...numbers){
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// Higher-Order function
function multiplier(factor){
    return function(number){
        return number * factor;
    }
}

const double = multiplier(2);
console.log(double(5)); // 10

// Callback Function
function fetchData(callback){
    setTimeout(() => {
        const data = 'Some Data';
        callback(data);
    }, 2000);
}

fetchData ((result) => {
    console.log(result); // Some Data (After 2 seconds)
})

