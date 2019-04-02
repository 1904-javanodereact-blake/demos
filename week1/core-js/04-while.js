// while loop is used if we don't know how many times we need
// to repeat some set of code

let a = -1;
while(a !== 5) {
  console.log('a is not 5');
  a = Math.floor(Math.random()*5+1); // should give me a random number between 1 and 5
  console.log(a);
}