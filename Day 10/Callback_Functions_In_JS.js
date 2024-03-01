// Callback Functions
function doSomethingAsync(callback) {

  // Simulating an asynchronous operation
  setTimeout(function () {
    console.log("Task completed!");

    // Calling the callback function
    callback();

  }, 1000); // Wait for 1 second
}

// Define a callback function
function callbackFunction() {
    
  console.log("Callback executed!");
}

// Call the function with the callback
doSomethingAsync(callbackFunction);
