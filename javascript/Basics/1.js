// console.log("Hello, World!");

// variable
let a = 243.43; // local scope
var b = 13; // global scope ❌
const c = "Hello";

// datatype
let myName = "Rounak" // 1. String 
let myAge = 30; // 2. Number (Integer)
let myMarks = 98.5; // Number (Float)
let isStudent = true; // 3. Boolean (true/false)
let myNumber = BigInt(1234567890123456789012345678901234567890); // 4. BigInt
let mySymbol = Symbol("mySymbol"); // 5. Symbol
let myDestination = undefined; // 6. Undefined
let mySalary = null; // 7. Null

// operators
// Arithmetic Operators
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = 3 % 2;
let preIncrement = ++b; // preIncrement = b + 1
let postIncrement = b++;
let preDecrement = --b; // preDecrement = b - 1
let postDecrement = b--;

// Assignment Operators
let x = 10;
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 4; // x = x / 4
x %= 3; // x = x % 3
x **= 2; // x = x ^ 2

// Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=
console.log(3 != '3'); // checks value only
console.log(3 !== '3'); // checks value and datatype
console.log(3 <= 3);

// Logical Operators
// &&, ||, !
console.log(false && false); // false
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log(false || false); // false
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(!true); // false
console.log(!false); // true

// typeof operator
console.log(typeof null);