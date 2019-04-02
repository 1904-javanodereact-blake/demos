let arr = [
  {
    name: 'steering wheel',
    material: 'adamantium'
  },
  {
    name: 'oars',
    material: 'oak'
  },
  {
    name: 'windows',
    material: 'sand'
  }
]

console.log(arr);
// unshift to add to front, push to add to back
arr.unshift({
  name: 'water bottle',
  material: 'steel'
});
console.log(arr);

console.log(arr[1]);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].name);
}

// enhanced for loop or known as for each loop
// part is just my variable name, it can be any variable name
for (let part of arr) {
  console.log(part.name);
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log('this is a matrix', matrix);
console.log(`this is a matrix ${matrix}`);
console.log(matrix[1][1]);

arr[53] = 'hello';
console.log(arr);