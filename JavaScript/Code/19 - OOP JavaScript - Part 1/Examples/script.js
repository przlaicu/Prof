/**************************************************
 * CLASSES
 **************************************************/

// Private fields
class Foo {
    #private = 123;
    constructor() {
        console.log(this.#private);
    }
}

const newFoo = new Foo();
// console.log(newFoo.#private);

/**************************************************
 * OVERLOADING DEFAULT METHODS
 **************************************************/
class Bird {
    fly() {}
}

class Pinguin extends Bird {
    fly() {
        throw Error('Pinguins can not fly.');
    }
}

var pinguin = new Pinguin();
//console.log(pinguin.fly());

/**************************************************
 * SUPER
 * The super keyword is used within class constructors and methods to call corresponding methods and access properties of a superclass (parent class). It is particularly useful in situations where you have a class that inherits from another class (subclasses and superclasses), allowing you to invoke the parent class's constructor or methods while adding or overriding behavior in the subclass. The super keyword is primarily used in the context of class inheritance and extends the functionality provided by the extends keyword.
 **************************************************/

class Foo2 {
    constructor(name) {
        this.name = name;
    }

    getNameSeparator() {
        return '-';
    }
}

class FooBar extends Foo2 {
    constructor(name, index) {
        super(name);
        this.index = index;
    }
    getFullName() {
        return this.name + super.getNameSeparator() + this.index;
    }
}

var firstFooBar = new FooBar('John', 1);
console.log(firstFooBar.name);
console.log(firstFooBar.getFullName());
