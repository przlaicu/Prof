// 1. Zadatak
function calculate(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operator';
  }
  return result;
}

console.log(calculate(5, 3, '+')); // Output: 8
console.log(calculate(5, 3, '-')); // Output: 2
console.log(calculate(5, 3, '*')); // Output: 15
console.log(calculate(5, 3, '/')); // Output: 1.6667

// 2. Zadatak
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello')); // Output: "olleh"
console.log(reverseString('world')); // Output: "dlrow"

// 3. Zadatak
function filterArray(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

// 4. Zadatak
function formatName(person) {
  return `${person.lastName}, ${person.firstName}`;
}

const person = { firstName: 'John', lastName: 'Doe' };
console.log(formatName(person)); // Output: "Doe, John"

// 5. Zadatak
function addObjectProperty(obj, key, value) {
  obj[key] = value;
  return obj;
}

const obj = { a: 1, b: 2 };
console.log(addObjectProperty(obj, 'c', 3)); // Output: {a: 1, b: 2, c: 3}

// 6. Zadatak
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
console.log(findMax([-1, -2, -3, -4, -5])); // Output: -1

// 7. Zadatak
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels('hello world')); // Output: 3
console.log(countVowels('javascript is fun')); // Output: 5

// 8. Zadatak
function createUser(firstName, lastName, age) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
}

console.log(createUser('John', 'Doe', 25)); // Output: {firstName: "John", lastName: "Doe", age: 25}
console.log(createUser('Jane', 'Smith', 30)); // Output: {firstName: "Jane", lastName: "Smith", age: 30}

// 9. Zadatak
function removeDuplicates(arr) {
  let uniqueElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueElements.includes(arr[i])) {
      uniqueElements.push(arr[i]);
    }
  }
  return uniqueElements;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])); // Output: ["a", "b", "c"]

// 10. Zadatak
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArrayValues([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArrayValues([10, 20, 30])); // Output: 60

// 11. Zadatak
function findLongestWord(str) {
  const words = str.split(' ');
  let longestWord = '';
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumps over the lazy dog')); // Output: "jumps"
console.log(findLongestWord('JavaScript is awesome')); // Output: "JavaScript"
