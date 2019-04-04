export class Ingredient {
  name: string;
  amount: number;
  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}

export class Cake {
  private name: string;
  ingredients: Ingredient[];
  layers: number;
  rating: number; // from 1 to 10
  constructor(name: string, ingredients: Ingredient[], layers: number, rating: number) {
    this.name = name;
    this.ingredients = ingredients;
    this.layers = layers;
    this.rating = rating;
  }

  getName() {
    return this.name;
  }
}

export let chocolateCake = new Cake(
  'Chocolate Cake',
  [new Ingredient('Chocolate', 7), new Ingredient('Flour', 3), new Ingredient('Butter', 10)],
  5,
  8
);

console.log(chocolateCake);
