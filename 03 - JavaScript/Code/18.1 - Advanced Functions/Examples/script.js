// Default binding
//window.name = 'John';
function greet() {
    console.log(`Hello, ${this.name}`); // This reffers to global "window" object
}
greet();

/**************************************************
 * BIND
 **************************************************/

function multiply(x, y) {
    console.log({ x, y });
    return `${this.name} has ${x * y} points.`;
}

var person2 = {
    name: 'Harry',
};

var person3 = {
    name: 'Ron',
};

var f1 = multiply.bind(person2);
f1(3, 5);

var f2 = multiply.bind(person3);
f2(10, 6);

/**************************************************
 * CALL
 **************************************************/

var person4 = {
    name: 'Harry',
};

var person5 = {
    name: 'Ron',
};

function greet(greeting, other) {
    console.log(`${greeting}, ${this.name}`);
    console.log(`${other}, ${this.name}`);
}

greet.call(person4, 'Hello', 'Hi');

/**************************************************
 * APPLY
 **************************************************/

greet.apply(person4, ['Hello', 'Hi']);

/**************************************************
 * EXAMPLE
 **************************************************/

function pozdravi(ime) {
    console.log(`Pozdrav, ${ime}! Moje ime je ${this.ime}.`);
}

var osoba = {
    ime: 'John',
};

pozdravi.apply(osoba, ['Allice']);
