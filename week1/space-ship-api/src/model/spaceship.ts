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
    this.shipId = shipId;
    this.owner = owner;
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.description = description;
  }
}