// Data Types & Operators
let bookCount = 100; // Number
let libraryOpen = true; // Boolean
let libraryName = "City Central Library"; // String

// Variable Scope & Functions
function addBook(title, author) {
    // Function scope
    let bookId = generateBookId(); // Local variable

    // String interpolation
    console.log(`Adding book: ${title} by ${author} with ID: ${bookId}`);

    // Return an object
    return { id: bookId, title, author };
}

// Global variable
var totalBooks = 1000;

// Arrays
let genres = ["Fiction", "Non-Fiction", "Science", "History", "Biography"];

// Switch
function getCategoryDiscount(genre) {
    let discount;
    switch(genre.toLowerCase()) {
        case "fiction":
            discount = 0.1;
            break;
        case "non-fiction":
            discount = 0.15;
            break;
        case "science":
        case "history":
            discount = 0.2;
            break;
        default:
            discount = 0.05;
    }
    return discount;
}

// Objects
let library = {
    name: libraryName,
    address: "123 Book Street",
    books: [],
    addBook: function(book) {
        this.books.push(book);
    }
};

// Converting JSON into an object
let bookJSON = '{"title":"JavaScript Basics","author":"John Doe","year":2023}';
let bookObject = JSON.parse(bookJSON);
console.log(bookObject.title); // Output: JavaScript Basics

// Converting an object into JSON
let bookJSON2 = JSON.stringify(bookObject);
console.log(bookJSON2); // Output: {"title":"JavaScript Basics","author":"John Doe","year":2023}

// Constructor
function Book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.available = true;
}

// Prototypes
Book.prototype.borrow = function() {
    if (this.available) {
        this.available = false;
        return true;
    }
    return false;
};

Book.prototype.return = function() {
    this.available = true;
};

// Rest operator
function addMultipleBooks(...books) {
    books.forEach(book => library.addBook(book));
    console.log(`Added ${books.length} books to the library.`);
}

// Spread operator
let newGenres = ["Mystery", "Romance"];
genres = [...genres, ...newGenres];

// Windows methods (Note: These will only work in a browser environment)
function displayLibraryInfo() {
    alert(`Welcome to ${library.name}!`);
    let userInput = prompt("Enter your name:");
    if (confirm(`Hello ${userInput}, would you like to see our book count?`)) {
        console.log(`Total books: ${totalBooks}`);
    }
}

// Main execution
function main() {
    // Create some books
    let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction");
    let book2 = new Book("A Brief History of Time", "Stephen Hawking", "Science");

    // Add books to library
    addMultipleBooks(book1, book2);

    // Borrow a book
    if (book1.borrow()) {
        console.log(`${book1.title} has been borrowed.`);
    }

    // Get discount for a genre
    let discount = getCategoryDiscount("Science");
    console.log(`Discount for Science books: ${discount * 100}%`);

    // Display library info (this would work in a browser)
    // displayLibraryInfo();

    // Generate a report
    let report = `
        Library Name: ${library.name}
        Total Books: ${totalBooks}
        Available Genres: ${genres.join(", ")}
    `;
    console.log(report);
}

// Helper function to generate a unique book ID
function generateBookId() {
    return Math.random().toString(36).substr(2, 9);
}

// Run the main function
main();