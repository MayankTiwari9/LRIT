// try catch

try {
  // Code that might throw an exception
  let result = someUndefinedVariable + 10; // This will throw an error
  console.log(result); // This line will not be executed due to the error
} catch (error) {
  // Code to handle the exception
  console.error("An error occurred:", error.message);
}

// throw

function exampleFunction(value) {
  if (value < 0) {
    throw new Error("Value must be positive");
  }
  // Continue with the normal flow
}

try {
  exampleFunction(-5);
} catch (error) {
  console.error(error.message);
}

// Error Object

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("This is a custom error");
} catch (error) {
  console.error(error.message);
}

// try finally

try {
  // Code that might throw an exception
  console.log("Try block: Start");
  // Some code that may cause an error
  let result = 20 + 10;
  console.log("Try block: End"); // This line will not be executed due to the error
} finally {
  // Code that will be executed regardless of whether an exception was thrown or not
  console.log("Finally block: This will always be executed.");
}

// Promise
async function fetchData() {
  try {
    const response = await fetch("https://example.com/api/data");
    const data = await response.json();
    // Process data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
