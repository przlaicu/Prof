var words = ['Hello', 'World', 'Welcome']; // literal

var array2 = new Array('eat', 'sleep');

// empty array
var emptyArray = [];

// array of numbers
var numberArray = [2, 4, 6, 8, 10];

// array of strings
var stringArray = ['eat', 'work', 'sleep'];

// array with mixed data type
var mixedArray = ['work', 'exercise', 1, true, false];

/*
 * Access element of an array
 */

var myArray = ['h', 'e', 'l', 'l', 'o'];

console.log(myArray[0]);
console.log(myArray[1]);

// Pushing items to array
var dailyActivites = ['eat', 'sleep'];

dailyActivites.push('exercise');
console.log(dailyActivites);

// Adds an element to the array at the begining of the array
dailyActivites.unshift('wake up');
console.log(dailyActivites);

// Remove the last element of an array
dailyActivites.pop();
console.log(dailyActivites);

var removedElement = dailyActivites.pop();
console.log(removedElement);
console.log(dailyActivites);

// Get the length of an array
console.log(dailyActivites.length);

// For Loop
var students = ['John', 'Jane', 'Mike', 'Marc', 'Daniel', 'Sophie']; // students.length = 6
var activeStudents = [];

for (var i = 0; i < students.length; i++) {
    // console.log(students[i]);
    activeStudents.push(students[i]);
}

console.log(activeStudents);
