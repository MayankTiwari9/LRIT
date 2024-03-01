// Using 'if', 'else if', 'else'
let temperature = 25;

if (temperature > 30) {
    console.log("It's a hot day!");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("It's a pleasant day.");
} else {
    console.log("It's a cold day.");
}


// Output :- It's a pleasant day.

// Logical AND (&&) and OR (||) Operator
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
    console.log("User is logged in and is an admin.");
} else if (isLoggedIn) {
    console.log("User is logged in but is not an admin.");
} else {
    console.log("User is not logged in.");
}

// Output :- User is logged in but is not an admin.
