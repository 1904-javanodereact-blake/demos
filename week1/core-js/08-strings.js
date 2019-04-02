let a = "hello";
let b = 'world';

let c = 5;

let tl = `template literals allow muli line strings
they also allow string interpolation
where we can inject JS expressions directly into the string
for example:
  a = ${a}
  b = ${b}
  c = ${c}
  boolean = ${true}
  5 + 5 = ${5 + 5}
  random number = ${Math.floor(Math.random()*100)}
`;

console.log(tl);