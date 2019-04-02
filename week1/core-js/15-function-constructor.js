// we can use a function as a blueprint for creating similar objects
function SpaceShip(name, weight, speed) {
  this.name = name;
  this.weight = weight;
  this.speed = speed;
}

let milleniumFalcon = new SpaceShip('Millenium Falcon', 'heavy', 'can do kessel run in 12 parsecs');
let enterprise = new SpaceShip(
  'Enterprise',
  5000,
  23412
)

console.log(milleniumFalcon);
console.log(enterprise);