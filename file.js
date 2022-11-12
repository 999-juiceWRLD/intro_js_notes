function getReminder() {
    console.log('Water the plants');
}


function inTurkish() {
    console.log('Merhaba!');
}

function greetMe(name) {
    console.log('Hello, ' + name + '!');
}

getReminder();
inTurkish();
greetMe('Kahraman');

function defaultVarGreet(name='Kahraman') {
    console.log(`Merhaba, ${name} - default argument: Kahraman`);
}

function shoppingList(item1='elma', item2='armut',
                      item3='portakal') {
    console.log(`First, buy ${item1}!`);
    console.log(`Then, buy ${item2} :)`);
    console.log(`Finally, go buy ${item3}.`);
}

defaultVarGreet();
shoppingList();

function rectangleArea(width, height) {
    area = width * height;
    return area;
}

const returnArea = rectangleArea(15, 12);
console.log(`The area is: ${returnArea}`);

const returnSquare = function(number) {
    const square = number ** 2;
    return square;
}

console.log(returnSquare(-5));

// arrow functions

const plantNeedsWater = (day) => {
    if (day === 'cumartesi' || day === 'Cumartesi') {
        console.log('sula lan sunlari');
    } else {
        console.log('not today lol');
    }
}

plantNeedsWater('sali');

/* 
1. Functions that take only a single parameter do not 
need that parameter to be enclosed in parentheses. However, 
if a function takes zero or multiple parameters, parentheses
are required.

ZERO PARAMETERS
const functionName = () => {};

ONE PARAMETER
const functionName = paramOne => {};

TWO OR MORE PARAMETERS
const functionName = (paranOne, paramTwo) => {};

2. A function body composed of a single-line block does not 
need curly braces. Without the curly braces, whatever that line 
evaluates will be automatically returned. The contents of the 
block should immediately follow the arrow => and the return keyword 
can be removed. This is referred to as implicit return.

SINGLE-LINE BLOCK
const sumNumbers = number => number + number;

MULTI-LINE BLOCK
const sumNumbers = number => {
    const sum = number + number;
    return sum;
}
*/