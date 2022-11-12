// ITERATORS 

/* 
Different methods to call iterators:
    .forEach()
    .map()
    .filter()
*/

// .forEach() Method

const fruits = ['apple', 'orange', 'cherries', 'mango', 
'pineapple'];

console.log('.forEach() Method:');

fruits.forEach(fruit => {
    console.log(fruit);
})

console.log('Another way to define the same iterator:');

fruits.forEach(function(fruit)  {
    console.log(`I want to eat a ${fruit}`);
  });

// .map() Method

console.log('.map() Method');
const animals = ['Hen', 'elephant', 'llama', 'leopard', 
'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(function(animal) {
    return animal[0];
});
console.log(secretMessage);
console.log(secretMessage.join(''));

const logAnimals = animals.map(animal => {
    return animal[0];
});
console.log(logAnimals);

// .filter() Method
console.log('.filter() Method');

const words = ['chair', 'music', 'pillow', 'brick', 
'pen', 'door'];
const shortWords = words.filter(function(word) {
    return word.length < 6;
})

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(number => {
    return number < 250;
})

console.log(shortWords);
console.log(smallNumbers);

// .findIndex() Method

const numList = [12, 23, 34, 45, 11, 76, 51, 9];
const indexList = numList.findIndex(function(num) {
    return num > 66;
})
console.log(`Return the number > 66, number in ${numList}`)
console.log(`.filter() method returns the first element
that satisfies the condition, else -1. Result: ${indexList}`);
const newIndexList = numList.findIndex(num => {
    return num > 40;
});
console.log(newIndexList);
console.log('==================');
// .reduce() Method
console.log('.reduce() Method');
const numbers = [1, 2, 3, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(summedNums);

const newNums = numbers.reduce(function(accumulator, currentValue) {
    return accumulator - currentValue;
})
console.log(newNums);

/* 
Iteration   accumulator     currentValue    returnValue
First        1              2               -1
Second      -1              3               -4
Third       -4              4               -8
Fourth      -8              10              -18
*/

// .some() Method
// even 1 value enough to return true, else false
console.log('.some() Method');
const words2 = ['unique', 'uncanny', 'pique', 'oxymoron', 
'guise'];
console.log(words2.some(word => {
    return word.length < 6;
}))
console.log(words2.some(function(word) {
    return word.length > 6;
}));

// .every() Method
console.log('.eveery() Method');

const words3 = ['asdfasdf', 'agsdfs', 'sdfgsdfg', 
'hahahahha'];
console.log(words3.every(word => {
    return word.length > 6;
}))
console.log(words3.every(function(word) {
    return word.length > 6;
}))