// ARRAYS

const favoriteGirlsLol = [
    'Berna',
    'Tuna',
    'Gulben',
    'Miray',
    'Selin'
];

const hobbies = ['nothing', 'honestly', 'programming'];

const famousSayings = [
    'Fortune favors the brave.', 
    'A joke is a very serious thing.', 
    'Where there is love there is life.'
];

const printNames = favoriteGirlsLol;
console.log(printNames);

const printHobbies = hobbies;
console.log(hobbies);


let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);

famousSayings[0] = 'High Guys Pro Merhaba Arkadaslar';
console.log(famousSayings);

/* 
elements in an array declared with const remain mutable. 
Meaning that we can change the contents of a const array, 
but cannot reassign a new array or a different value.
*/

console.log(`The length of the famousSayings is: ${famousSayings.length}`);

const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4']

const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('cook', 'passionately');
console.log(chores)

const someList = ['list[0]', 'list[1]', 'list[2]', 'list[3]'];
let thrown = someList.pop();
console.log(someList);
console.log(`${thrown} is thrown lol`);

// SOME OF THE OTHER METHODS

const groceryList = [
    'orange juice',
    'bananas', 
    'coffee beans', 
    'brown rice', 
    'pasta', 
    'coconut oil', 
    'plantains'
];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);