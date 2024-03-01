// Date.now()
let currentDate = Date.now();

console.log(currentDate); // 1708511629642

// new Date()
let newDate = new Date();

console.log(currentDate); // 1708511629642

// get
let getDate = new Date();

console.log(getDate.getFullYear());  // Get the year - 2024
console.log(getDate.getMonth());     // Get the month (0-11) - 1
console.log(getDate.getDate());      // Get the day of the month - 21
console.log(getDate.getHours());     // Get the hour - 16
console.log(getDate.getMinutes());   // Get the minutes - 5
console.log(getDate.getSeconds());   // Get the seconds - 28

//set
let setDate = new Date();
setDate.setFullYear(2023);    // Set the year to 2023
setDate.setMonth(5);         // Set the month to June (0-11)
setDate.setDate(15);          // Set the day of the month to 15
setDate.setHours(12);         // Set the hour to 12
setDate.setMinutes(30);       // Set the minutes to 30
setDate.setSeconds(45);       // Set the seconds to 45

console.log(setDate); // 2023-06-15T07:00:45.435Z
