// this is object literal notation
// it is just a set of key value pairs
let spaceShip = {
  name: 'Millenium Falcon',
  maxSpeed: 'can do kessel run in 12 parsecs', // in parsecs
  weight: 'heavy',
  passengerLoad: 20
}

console.log(spaceShip);
// you can use . (dot notation) to access fields
console.log(`ship name = ${spaceShip.name}`);
// you can also use [] (bracket notation) to access fields
console.log(`ship name = ${spaceShip['name']}`);

spaceShip.weapons = 'quad cannons'; // we can just dynamically add fields
delete spaceShip.name; // you can delete fields entirely from objects
console.log(spaceShip);
