let a = {};

function outer() {
  let b = 5;
  a.setB = (newValue) => {
    if(newValue) {
      b = newValue
    }
    return b;
  }
}

outer();

console.log(a.setB());
console.log(a.setB(25));
console.log(a.setB());
