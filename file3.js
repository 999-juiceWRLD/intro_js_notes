// LOOPS

const vacationSpots = ['tel aviv', 'paris', 'beijing'];
console.log('Looping Countries');
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(vacationSpots[i]);
}

console.log('Looping Through Numbers');
for (let i = 5; i <= 10; i++) {
    console.log(i);
}

console.log('Looping NUmbers Backwards');
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}

console.log('While Loop Start');
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

console.log('While Loop End');

console.log('Do While Loop Started');
const cupsOfSugarNeeded = 8;
let cupsAdded = 0;

do {
  cupsAdded += 1;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

console.log(`Cups Added, Cups of Sugar Needed: ${cupsAdded}, ${cupsOfSugarNeeded}`);
console.log('Do While Loop Started');