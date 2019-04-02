
class SpaceShip {
  constructor(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
  }
  getName() {
    return this.name;
  }
}

let milleniumFalcon = new SpaceShip('Millenium Falcon', 434232, 12312);

console.log(milleniumFalcon);
console.log(milleniumFalcon.getName());