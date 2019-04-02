// var has global/module and function scope
// let anc const have block scope in addition to this

var a = 5;
let b = 10;

function fun() {
  // var get hoisted, which means the declaration gets pulled to the 
  // top of its scope, it is as if we had the following at the top
  // var c;
  console.log(`a = ${a} and b= ${b}`);
  a = 25;
  console.log(`c = ${c}`); 
  if (true) {
    var c = 15;
    let d = 20;
  }
  console.log(`c = ${c}`);
  // console.log(`d = ${d}`); // breaks code because let is block scoped
  
}
fun();
console.log(a);