let obj = {
  field1: 5,
  a: 2,
  name: 'Jerry',
  speak: () => {console.log(`${this.name} says hello`)}
}

// for in loop can be used to iterate through keys of an object
for (let objectField in obj) {
  console.log(`key = ${objectField}
  and value = ${obj[objectField]}`);
}