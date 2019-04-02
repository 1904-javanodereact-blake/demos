let parent = {
  a: 5,
  b: 10
}

let obj = {
  a: 15,
  c: 25
}

obj.__proto__.d = 53;
console.log(`parent.d = ${parent.d}`);

obj.__proto__ = parent;

console.log(`obj.a = ${obj.a}
obj.b = ${obj.b}
obj.d = ${obj.d}
`)

console.log(obj);

let myNumber = 5;
console.log(`myNumber = ${myNumber}
myNumber.d = ${myNumber.d}`);

console.log(parent.__proto__);
