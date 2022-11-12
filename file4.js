// OBJECT

let spaceShip = {
    name: 'Lazarus Space Ship',
    color: 'Black - Ultramarine',
    status: 'Lazarus is go',
    'Changed Name': 'Afrodit'
}

const lazarusShip = spaceShip;
console.log(lazarusShip.name);
console.log(lazarusShip.color);
console.log(lazarusShip.status);

const newName = lazarusShip['Changed Name'];
console.log(newName);

console.log('====================');

let retrieveMessage = 'come get me.';

const messageToGod = {
    takeMe() {
        console.log('Oh God, ' + retrieveMessage);
    },

    iWill() {
        console.log('Or I will.');
    }
}

messageToGod.takeMe();
messageToGod.iWill();

// console.log('====================');

let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  const capFave = spaceship.crew.captain['favorite foods'][0];
  spaceship.passengers = [{
    woman: 'enesin annesi',
    man: "woman'i gotten siken"
  }]
  
  const firstPassenger = spaceship.passengers[0];

  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // console.log('====================');
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  }
  
  let remotelyDisable = obj => {
    obj.disabled = true;
  }
  greenEnergy(spaceship)
  remotelyDisable(spaceship)
  
  console.log(spaceship);
  console.log(spaceship);