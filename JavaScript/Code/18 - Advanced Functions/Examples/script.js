// Advanced Functions

function outerFunction(outerVariable) {
    var outer2 = 'Hi';
    return function innerFunction(innerVaraiable) {
        console.log('Outer variable: ' + outerVariable);
        console.log('Inner variable: ' + innerVaraiable);
        console.log(outer2);
    };
}

//outerFunction('1st brackets')('2nd brackets');

var newFunction = outerFunction('Outer');
newFunction('Inner');
