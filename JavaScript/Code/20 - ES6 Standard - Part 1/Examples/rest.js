// brojevi = argumenti
function zbrajanje(...brojevi) {
    let rezultat = 0;
    let broj; // lokalna varijabla
    for (broj of brojevi) {
        rezultat = rezultat + broj;
    }
    return rezultat;
}

console.log(zbrajanje(1, 2, 3, 4, 5)); // 15

// Prikupljanje preostalih elemenata u nizu
const [prvi, drugi, ...ostali] = [1, 2, 3, 4, 5];
console.log(prvi); // Ispisuje 1
console.log(drugi); // Ispisuje 2
console.log(ostali); // Ispisuje [3, 4, 5]

// Destrukturiranje objekta
const person = {
    name: 'John',
    age: 30,
    country: 'USA',
};

const { name, ...rest } = person;
console.log(name);
console.log(rest);
