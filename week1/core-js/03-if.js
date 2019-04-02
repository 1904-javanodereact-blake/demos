let a = true;

if (a) {
  console.log('doing this line of code');
} else {
  console.log('doing these other lines of code');
}

let num = 250;

if(num < 0) {
  console.log('num is negative');
} else if (0 <= num && num <= 25) { // we can have any number of else-if
  console.log('num is between 0 and 25, incluclusively');
} else {
  console.log('num is greater than 25')
}