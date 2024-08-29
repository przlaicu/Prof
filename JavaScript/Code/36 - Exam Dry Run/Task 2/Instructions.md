# Library Management System in JavaScript

## Objective:
Create a JavaScript program for a basic Library Management System. Your program should include the following features and demonstrate these JavaScript concepts:

## 1. Data Types & Operators:
- **Objective**: Use different data types (numbers, booleans, strings) to represent library information.
- **Instructions**:
  - Define variables to store the number of books, library status (open/closed), and library name.
  - Use appropriate operators to manipulate these variables if necessary.
- **Expected Output**:
  - (No console output specifically for this section)

## 2. Variable Scope & Functions:
- **Objective**: Create functions to add books and manage the library. Demonstrate understanding of global and local variable scope.
- **Instructions**:
  - Write a function that adds a book to the library. The function should use local variables to manage the book's ID.
  - Use global variables to store information that is accessible throughout your program.
- **Expected Output**:
  - `Adding book: The Great Gatsby by F. Scott Fitzgerald with ID: abc123xyz`

## 3. Arrays:
- **Objective**: Use an array to store book genres.
- **Instructions**:
  - Create an array that holds different book genres available in the library.
- **Expected Output**:
  - (No console output specifically for this section)

## 4. Switch Statement:
- **Objective**: Implement a function that returns different discount rates based on book genres using a switch statement.
- **Instructions**:
  - Write a function that takes a book genre as input and returns a discount rate.
- **Expected Output**:
  - `Discount for Science books: 20%`

## 5. Objects:
- **Objective**: Create an object to represent the library, with properties and methods.
- **Instructions**:
  - Define an object to represent the library, including properties like name, address, and an array of books.
  - Add methods to the object to add books and perform other operations.
- **Expected Output**:
  - (No console output specifically for this section)

## 6. JSON Conversion:
- **Objective**: Demonstrate how to convert a book object to JSON and back.
- **Instructions**:
  - Convert a book object to a JSON string and then parse it back to an object.
- **Expected Output**:
  - `JavaScript Basics`
  - `{"title":"JavaScript Basics","author":"John Doe","year":2023}`

## 7. String Interpolation:
- **Objective**: Use template literals for string formatting throughout your code.
- **Instructions**:
  - Use template literals to format strings when logging information to the console.
- **Expected Output**:
  - `Adding book: The Great Gatsby by F. Scott Fitzgerald with ID: abc123xyz`
  - `Discount for Science books: 20%`
  - `Library Name: City Central Library\n Total Books: 1000\n Available Genres: Fiction, Non-Fiction, Science, History, Biography, Mystery, Romance`

## 8. Constructor and Prototypes:
- **Objective**: Create a Book constructor and add methods to its prototype.
- **Instructions**:
  - Define a constructor for creating book objects.
  - Add methods to the constructor’s prototype for borrowing and returning books.
- **Expected Output**:
  - `The Great Gatsby has been borrowed.`

## 9. Rest and Spread Operators:
- **Objective**: Use the rest operator in a function that adds multiple books. Use the spread operator to combine arrays.
- **Instructions**:
  - Write a function that uses the rest operator to accept multiple books and add them to the library.
  - Use the spread operator to merge arrays of genres.
- **Expected Output**:
  - `Added 2 books to the library.`

## 10. Window Methods:
- **Objective**: Create a function that uses alert, prompt, and confirm to interact with the user.
- **Instructions**:
  - Write a function that uses `alert`, `prompt`, and `confirm` to interact with the user. Note that this will only work in a browser environment.
- **Expected Output**:
  - (This will depend on user interaction in the browser)

## 11. Main Execution:
- **Objective**: Write a main function that demonstrates the use of all implemented features.
- **Instructions**:
  - Create a `main` function that ties all the above concepts together. It should create book objects, add them to the library, apply discounts, and display library information.
- **Expected Output**:
  - `Adding book: The Great Gatsby by F. Scott Fitzgerald with ID: abc123xyz`
  - `Added 2 books to the library.`
  - `The Great Gatsby has been borrowed.`
  - `Discount for Science books: 20%`
  - `Library Name: City Central Library\n Total Books: 1000\n Available Genres: Fiction, Non-Fiction, Science, History, Biography, Mystery, Romance`

# Bonus:
- **Objective**: Implement error handling where appropriate. Add comments to explain your code.
- **Instructions**:
  - Enhance your program with error handling using try-catch blocks where necessary.
  - Add meaningful comments to explain each part of your code.
