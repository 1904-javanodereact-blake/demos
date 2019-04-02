// a function is a piece of reusable functionality


function doMath(a, b, c) {
  return a + b * c;
}

console.log(doMath(5,5, 2));
console.log(doMath(2,8,15));

let result = doMath(55,83,1234);
console.log(result);

// in es6 arrow functions were introduced
let moreMath = (a, b) => {
  let result = a;
  for(i = 0; i < b - 1; i++) {
    result = result*a;
  }
  return result;
}

console.log(moreMath(2, 3));
