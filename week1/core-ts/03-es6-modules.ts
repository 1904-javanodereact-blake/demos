import { Cake, chocolateCake, Ingredient } from './02-classes';

let strawberryCake = new Cake(
  'Stawberry Cake',
  [new Ingredient('Strawberry', 30), new Ingredient('Blue Berry', 15)],
  3,
  6
);

console.log(strawberryCake);
console.log(chocolateCake);
