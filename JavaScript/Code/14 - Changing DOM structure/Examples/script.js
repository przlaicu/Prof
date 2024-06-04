window.onload = function () {
    console.log('Page fully loaded');
};

// Creating new elements
var main = document.getElementById('main');
console.log(main);

var newDiv = document.createElement('div');
console.log(newDiv);

// Appending <div> to HTML
main.appendChild(newDiv);

// Parent node is BODY
// main.parentNode.removeChild(main)
var parent = main.parentNode; // body
// parent.removeChild(main); // Removing #main from <body>
