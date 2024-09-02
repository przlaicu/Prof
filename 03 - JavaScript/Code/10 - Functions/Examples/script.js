function hello() {
    // declaring a function named hello()
    console.log('Hello there');
}

hello(); // function call

// Function without return
function greet(name) {
    console.log('Hello ' + name);
}

greet('Alice');

function add(a, b) {
    // Body of the function
    return a + b;
}

// Invoking the function
console.log(add(3, 4));
console.log(add(5, 36));

// Dynamic function with prompt - run this in Browser or https://www.programiz.com/javascript/online-compiler/
function dynamicGreet(name) {
    console.log(`Hello, ${name}. How are you today?`);
}

var student = prompt('Enter a name: ');
dynamicGreet(student);

// Self invoking function - run this in Browser or https://www.programiz.com/javascript/online-compiler/
(function calculateBMI() {
    var result;

    var person = prompt(`Please enter your name: `);
    var weight = prompt(`What is your weight, ${person}? `);
    var height = prompt(`And lastly, what is your height, ${person}? `);

    result = weight / (height * 2);

    alert(`${person} your BMI score is ${result.toFixed(2)}`);
})();

// Function as a variable
let calculate = function (value) {
    return console.log(value + 1);
};

let result = calculate(1);
