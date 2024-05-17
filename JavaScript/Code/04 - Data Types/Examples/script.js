// Data types & Checking Data Types using typeof operator
var username = "Nino";
var age = 26;
var isWoman = false;
var intro = "Nino is a Front-End Development Lecturer at Algebra";
var loaded = 99.9;
var not_a_number = NaN;

console.log(typeof username);
console.log(typeof age);
console.log(typeof isWoman);
console.log(typeof intro);
console.log(typeof loaded);
console.log(typeof not_a_number);

// String - Number
// '5' becomes Number
console.log("5" - 2);

// String + Number
// '10' stays "String", Number is added to string and becomes a string
console.log("10" + 5);

console.log(10 + -+-10);

var foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
var value1 = 900719925124740998n; // BigInt value
