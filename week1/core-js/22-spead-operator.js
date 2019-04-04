let spaceShip = {
  name: 'Millenium Falcon',
  maxSpeed: 'can do kessel run in 12 parsecs', // in parsecs
  weight: 'heavy',
  passengerLoad: 20
}

let newShip = {
  ...spaceShip,
  name: 'Imperial Fist'
}

console.log(newShip);

let arr = [1, 8, 2];
let arr2 = [...arr, spaceShip, ...arr];
console.log(arr2);