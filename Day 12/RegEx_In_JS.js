// Regular Expression (RegEx)

let pattern = /hello/i;  // Case-insensitive match for "hello"

let str = "Hello, World!";

if (pattern.test(str)) {
    console.log("Match found!");
} else {
    console.log("No match found!");
}

// Output: Match found!
