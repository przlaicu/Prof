window.onload = function () {
    console.log('Page fully loaded');
    document.body.style.background = 'aliceblue'; // Changing background color of body
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

// Removing and adding classes using classList
main.classList.add('hidden');
main.classList.remove('main');
console.log(main.classList); // Returns an array of classes

// Change background of the body
function setBackground() {
    document.body.style.background = 'lavender';
    alert('Wohoo! You have changed the color!');
}

// Change text color on page
function changeColor(newColor) {
    var element = document.getElementById('main');
    element.style.color = newColor;
}

// Change display property of an element with an ID main to "none"
function hideEverything() {
    document.getElementById('main').style.display = 'none';
}

// Getting value from custom form
function submitForm() {
    var fName = document.getElementById('name').value;
    var lName = document.getElementById('surname').value;

    alert(`My name is ${fName} ${lName}`);
}

var button = document.getElementById('submit');
button.addEventListener('click', submitForm);

// Check how many buttons we have inside of an element with ID main
function checkTags() {
    var main = document.getElementById('main');
    var tags = main.getElementsByTagName('button');

    console.log(tags);
    alert(`There are ${tags.length} buttons in #main.`);
}

// Creating a new element (div)
function newElement() {
    // Stvaranje novog <div> elementa
    var div = document.createElement('div');

    // Postavljanje nekih svojstava i atributa za novi element
    div.innerText = 'Ovo je novi div! :)'; // Postavljanje teksta unutar div-a
    div.className = 'new-div'; // Postavljanje klase div-a
    div.id = 'hero'; // Postavljanje ID-a div-a

    // Dodavanje novog elementa u postojeći element na stranici
    var parent = document.getElementById('main');
    parent.appendChild(div);
}

/**
 * Ovaj kod će prvo dohvatiti element koji želite ukloniti pomoću getElementById, zatim će dohvatiti roditeljski element tog elementa i na kraju će koristiti removeChild metodu da bi ga uklonili iz roditeljskog elementa.
 *
 * U prvom primjeru koristimo var parent = div.parentNode; kako bismo dohvatili referencu na roditeljski element elementa koji želimo ukloniti. To je potrebno jer removeChild metoda zahtijeva da specificirate roditeljski element iz kojeg želite ukloniti dijete.
 *
 */

function removeElement() {
    // Dohvaćamo element koji želimo ukloniti
    var div = document.getElementById('new-div');

    // Dohvaćamo roditeljski element elementa koji želimo ukloniti
    var parent = div.parentNode;

    // Uklanjamo element iz roditeljskog elementa
    parent.removeChild(div);
}

function removeElementWithoutParentNode() {
    // Dohvaćamo element koji želimo ukloniti
    var id = document.getElementById('new-div');

    // Uklonite element iz DOM-a
    id.remove();
}

function getEverything() {
    var klasa = document.querySelector('.footer');
    var id = document.querySelector('#footer');
    var name = document.querySelector("input[name='footer']");

    console.log(klasa);
    console.log(id);
    console.log(name);
}

/**
 * childNodes vam omogućava pristup listi čvorova koji su direktna djeca tog elementa.
 * Vraća NodeList objekt koji sadrži svu direktnu djecu tog elementa, uključujući tekstualne čvorove, komentare i druge HTML elemente.
 * In JavaScript, a NodeList is a type of object that represents a collection of nodes in a document. It's often used to work with HTML elements, but it can also be used with other types of nodes, such as text nodes or comment nodes.
 */
var lista = document.getElementById('mojaLista');
var children = lista.childNodes;

// Ispisuje broj čvorova
console.log(children.length); // Ispisuje 7

// Pristup pojedinim elementima
console.log(children[1].innerText); // Ispisuje "Prva stavka"

// Anonymous self-invoking function that will console.log text inside all buttons
(function () {
    var buttons = document.querySelectorAll('button'); // Dobivanje NodeList-a svih <button> elemenata

    for (var i = 0; i < buttons.length; i++) {
        console.log(buttons[i].textContent); // Prikazivanje teksta svakog <button> elementa
    }
})();
