class Person {
    talk() {
        return console.log('Talking');
    }
}

var me = new Person();
var you = new Person();

me.talk();
you.talk();

Person.prototype.talk = function () {
    return console.log('New and improved talking');
};

me.talk();

// Extends
class Human {
    talk() {
        return console.log('I am a regular human! I can talk!');
    }
}

class SuperHuman extends Human {
    fly() {
        return console.log('I am a super human, I can fly!');
    }
}

var regular = new Human();
regular.talk();

var superman = new SuperHuman();
superman.fly();
superman.talk();

// Constructor
class Car {
    constructor(name, year, engine) {
        this.name = name;
        this.year = year;
        this.engine = engine;
    }
    age() {
        var date = new Date();
        return date.getFullYear() - this.year;
    }
}

var ford = new Car('Ford Mustang', 1954, 'gas');
console.log(`My car ${ford.name} is ${ford.age()} years old.`);
