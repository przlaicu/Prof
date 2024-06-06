// EXAMPLE NUMBER 1

var para = document.createElement('p'); // Create paragraph

var element = document.getElementById('div1'); // Get <div id="div1">

element.appendChild(para); // Inject <p> into <div id="div1">

var textNode = document.createTextNode('Am I new here? Yes, I am');

para.appendChild(textNode); // Injecting text into paragraph

// EXAMPLE NUMBER 2
var para2 = document.getElementById('p2');
para2.remove();

// EXAMPLE NUMBER 3
var h1 = document.querySelector('h1');
h1.innerText = 'Hello, class!';
h1.setAttribute('class', 'hero');
h1.setAttribute('id', 'hero');

// EXAMPLE 4
document.querySelector('#div2').innerHTML =
    '<h1>I have just added myself here.</h1>';

var element = document.getElementById(id);
element.className = 'containerElement containerElement--left';

console.log(element.classList);
element.classList.add(hide);
element.classList.remove(hide);

// EXAMPLE 5
