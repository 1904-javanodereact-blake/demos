export class Spaceship {
  shipId: number;
  owner: number;
  name: string;
  weight: number;
  speed: number;
  description: string;

  constructor(shipId = 0,
    owner = 0,
    name = '',
    weight = 0,
    speed = 0,
    description = '') {

    this.shipId = this.shipId;
    this.owner = this.owner;
    this.name = this.name;
    this.weight = this.weight;
    this.speed = this.speed;
    this.description = this.description;
  }
}