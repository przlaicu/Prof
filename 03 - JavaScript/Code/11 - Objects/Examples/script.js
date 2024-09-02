// Object literal
var person = {
    firstName: 'Nino',
    lastName: 'Škuflić',
    id: 12345,
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());

// Creating an object by using the new keyword (new Object method)
var myCar = new Object();
console.log(myCar); // {}

myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);

// Another object

var phone = {
    brand: {
        manufacturer: 'Apple',
        model: 'iPhone 13 Pro',
    },
    color: ['Sierra Blue', 'Silver', 'Gold', 'White'],
    price: 999,
    display: '6.1-inch display',
    qty: 184,
    checkStock: function () {
        if (this.qty > 0) {
            return true;
        } else {
            return false;
        }
    },
};

console.log(phone.brand.model);
console.log(
    `The phone you have selected ${phone.brand.model} is ${
        phone.checkStock()
            ? 'available for purchase.'
            : 'not available for purchase. Sorry.'
    }`
);

// Converting an object into JSON
var myPhoneJSON = JSON.stringify(phone);
console.log(myPhoneJSON);

// Converting JSON into Object
var myJSON = `{"brand":{"manufacturer":"Apple","model":"iPhone 14 Pro"},"color":["Sierra Blue","Silver","Gold","White"],"price":1099,"display":"6.1-inch display","qty":100}`;

var myObject = JSON.parse(myJSON);
console.log(myObject);
