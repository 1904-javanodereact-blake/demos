function fun(a) {
  console.log(a);
  a = a + 1;
  console.log(a);
}

let a = 5;
fun(a);
console.log(a);

function fun2(b) {
  console.log(b);
  b.name = 'blake';
  console.log(b); 
}

let b = {name: ''}
fun2(b);
console.log(b);