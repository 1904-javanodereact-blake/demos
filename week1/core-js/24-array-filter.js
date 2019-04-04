let pies = [
  {
    name: 'Pecan Pie',
    rating: 4,
    flavor: 'Pecans'
  },
  {
    name: 'Oreo',
    rating: 6,
    flavor: 'Chocolate and Creme'
  },
  {
    name: 'Pie',
    rating: 3.14,
    flavor: "?"
  },
  {
    name: 'Meat Pie',
    flavor: 'Beef',
    rating: 10
  },
  {
    name: 'Mud Pie',
    rating: -100,
    flavor: 'Earthy'
  }
];

// if my callback function returns true it will keep the element
// in the new array, if false it will not be in the new array.
let goodPies = pies.filter(pie => {
  return pie.rating > 5;
});

// this would be equivalent to the above
let cb = (pie) => {
  return pie.rating > 5;
}
let alsoGoodPies = pies.filter(cb);


console.log('original array',pies);
console.log('good pies', goodPies);