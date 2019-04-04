
let arr = [25, 16, 'hello world', true];

let cb = (ele, index) => {
  console.log(`ele + 5 = ${ele + 5}, at index: ${index}`);
}

arr.forEach(cb);

arr.__proto__.myForEach = function(someCb) {
  for (let i = 0; i < this.length; i++) {
    someCb(this[i], i);
  }
}

arr.myForEach(cb);