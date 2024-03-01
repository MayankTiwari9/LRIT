// length
const arr = [1, 2, 3, 4, 5];

console.log(arr.length); // 5

// toString
const cars = ["Audi", "Toyota", "Tata"];

console.log(cars.toString()); // Audi,Toyota,Tata

//join
const months = ["January", "February", "March"];

console.log(months.join(" | ")); // January | February | March

// delete
const carDetails = {
    name: "Fortuner",
    color: "Black",
    wheels: 4
}
delete carDetails.wheels;

console.log(carDetails); // { name: 'Fortuner', color: 'Black' }

// concat
let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let combinedArray = arr1.concat(arr2);
console.log(combinedArray);  // [1, 2, 3, 4, 5]