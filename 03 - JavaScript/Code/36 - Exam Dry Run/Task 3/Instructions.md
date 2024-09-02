# Advanced Library Management System - Interactive Web Application

## Objective:
Create an interactive web application for an Advanced Library Management System. Your application should include all the features from Task 1, plus the following additional requirements:

## 1. HTML Structure:
- **Objective**: Create an HTML file with necessary elements for displaying library information and interacting with the system.
- **Instructions**:
  - Design an HTML structure with elements like forms, buttons, and divs for interacting with the library system.
  - Ensure there are placeholders for dynamic content, such as the book list and library information.
- **Expected Output**:
  - (No console output specifically for this section)

## 2. CSS Styling:
- **Objective**: Add basic styling to make the interface user-friendly.
- **Instructions**:
  - Use CSS to style the HTML elements, making sure the interface is clean and easy to navigate.
  - Apply styling to elements such as the book list, form inputs, and buttons.
- **Expected Output**:
  - (No console output specifically for this section)

## 3. For Loop:
- **Objective**: Implement a function that uses a for loop to list all available genres.
- **Instructions**:
  - Create a function that iterates over an array of genres and lists them in a string format.
  - Log the list of genres to the console.
- **Expected Output**:
  - `Available genres: Fiction, Non-Fiction, Science, History, Biography`

## 4. Do While Loop:
- **Objective**: Create a function that generates a unique ID for books using a do-while loop.
- **Instructions**:
  - Implement a function that generates a random numeric ID and ensures it is unique within the library.
  - Log the generated ID to the console.
- **Expected Output**:
  - `Unique ID: 123456`

## 5. Event Listeners:
- **Objective**: Add event listeners for user interactions (e.g., adding a book, toggling availability).
- **Instructions**:
  - Attach event listeners to buttons and forms to handle actions like adding a book, toggling availability, and removing a book.
- **Expected Output**:
  - (No direct console output; depends on user interaction)

## 6. DOM Manipulation:
- **Objective**: Update the DOM to reflect changes in the library system (e.g., displaying the book list).
- **Instructions**:
  - Write JavaScript code that dynamically updates the DOM to show the current list of books and other library details.
- **Expected Output**:
  - (No direct console output; updates will be visible in the web page's UI)

## 7. Classes:
- **Objective**: Refactor the Book constructor into a class with appropriate methods.
- **Instructions**:
  - Use ES6 class syntax to define the `Book` class, including methods for managing book availability and generating book IDs.
- **Expected Output**:
  - (No console output specifically for this section)

## 8. Async Functions:
- **Objective**: Implement an async function to fetch data from an external API (e.g., a random quote).
- **Instructions**:
  - Write an async function that fetches a random quote from an API and handles any errors that occur.
  - Display the fetched quote in the browser.
- **Expected Output**:
  - (Depends on the fetched data, e.g.,) `'Life is what happens when you’re busy making other plans.' - John Lennon`
  - `Error fetching quote: [error details]` (if an error occurs)

## 9. Arrow Functions:
- **Objective**: Use arrow functions where appropriate in your code.
- **Instructions**:
  - Refactor your functions to use arrow function syntax where it makes sense (e.g., for shorter, anonymous functions).
- **Expected Output**:
  - (No console output specifically for this section)

## 10. API Connection:
- **Objective**: Connect to an external API to fetch additional data for your application.
- **Instructions**:
  - Use the Fetch API or another method to connect to an external API and retrieve data relevant to your application.
  - Display the data or use it to enhance the functionality of your library system.
- **Expected Output**:
  - (Depends on the fetched data; for example, a quote or book details could be displayed)

## 11. Cookies:
- **Objective**: Implement functions to set and get cookies (e.g., to store the last visit date).
- **Instructions**:
  - Write functions that create, retrieve, and manipulate cookies to store user-specific data like the last visit date.
  - Use these functions to display the user's last visit date on the page.
- **Expected Output**:
  - `Last visit: 8/29/2024, 2:34:56 PM` (formatted date and time from the stored cookie)

## 12. Local Storage:
- **Objective**: Use local storage to persist the library data between page reloads.
- **Instructions**:
  - Implement functionality that saves the library’s book data to the browser's local storage and retrieves it when the page is reloaded.
  - Ensure that any updates to the library (e.g., adding or removing books) are reflected in local storage.
- **Expected Output**:
  - (No console output specifically for this section; functionality will be seen in the persistent data between reloads)

# Additional Requirements:
- **Objective**: Ensure your application is responsive and works on different screen sizes.
- **Instructions**:
  - Use CSS media queries or responsive design techniques to ensure the application looks good on various devices.
- **Objective**: Implement proper error handling and display user-friendly error messages.
- **Instructions**:
  - Add error handling in your JavaScript code to manage issues such as network failures or invalid input, and display clear messages to the user.
- **Objective**: Add comments to explain complex parts of your code.
- **Instructions**:
  - Include comments that describe what different parts of your code are doing, especially in more complex sections.
- **Objective**: Ensure your code follows good practices for accessibility.
- **Instructions**:
  - Implement features such as ARIA roles, proper labeling of form elements, and keyboard navigation to make your application accessible.

# Bonus Challenges:
- **Objective**: Implement a search functionality for books.
- **Instructions**:
  - Add a search bar that allows users to search for books by title, author, or genre, and update the book list dynamically based on the search results.
- **Objective**: Add a feature to sort books by different criteria (e.g., title, author, availability).
- **Instructions**:
  - Implement sorting functionality that allows users to sort the list of books by different attributes, such as title, author, or availability status.
- **Objective**: Create a simple authentication system to restrict access to certain features.
- **Instructions**:
  - Build a basic login form and authentication mechanism that restricts access to certain features of the library management system (e.g., adding or removing books).
