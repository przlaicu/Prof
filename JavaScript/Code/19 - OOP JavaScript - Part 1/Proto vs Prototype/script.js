// prototype

function Osoba(ime) {
    this.ime = ime;
}

Osoba.prototype.pozdravi = function () {
    console.log('Bok, zovem se ' + this.ime);
};

var ivan = new Osoba('Ivan');
ivan.pozdravi(); // Izlaz: "Bok, zovem se Ivan"

var nino = new Osoba('Nino');
nino.pozdravi();

// __proto__
var ana = new Osoba('Ana');
console.log(ana.__proto__ === Osoba.prototype); // true

var person = {
    name: 'John',
};

var employee = {
    jobTitle: 'Developer',
};

employee.__proto__ = person;
console.log(employee.name);

var person2 = {};
person2.name = 'Nino';
person2.age = 27;

console.log(person2.name);
console.log(person2.age);

var dogs = ['Fido', 'Rex', 'Max'];
console.log(Object.getPrototypeOf(dogs));

var animal = {
    makeSound() {
        console.log('Generic animal sound');
    },
};

var cat = {
    purr() {
        console.log('Purrring...');
    },
};

Object.setPrototypeOf(cat, animal);
cat.makeSound();

var proto1 = Object.getPrototypeOf(cat);
console.log(proto1);
