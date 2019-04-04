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


let myPies = pies.filter(pie => {
    return pie.rating > 5;
  })
  .map(ele => {
    return {
      ...ele,
      name: 'Delicious ' + ele.name,
      size: 'massive'
    }
  });

console.log(pies);
console.log(myPies);