// Declare variables using different types (var, let, const)
var name = "Alice";        // String variable
let age = 30;              // Number variable
const city = "Wonderland"; // Constant String

// Performing string manipulation
let greeting = "Hello, my name is " + name + " and I am " + age + " years old.";  // String concatenation
let introduction = `I live in ${city}.`;  // Template literal for strings

// Arithmetic operations with numbers
let doubledAge = age * 2;   // Doubling the age
let ageNextYear = age + 1;   // Adding one year to the age
let sum = age + 5;           // Adding 5 to the current age

// Log outputs for checking
console.log(greeting);          // Output string with concatenation
console.log(introduction);      // Output using template literals
console.log("Double age: " + doubledAge); // Output after arithmetic operation
console.log(`Next year, I'll be ${ageNextYear} years old.`);  // Output with arithmetic and template literals
console.log("Age plus 5: " + sum); // Output after arithmetic operation
