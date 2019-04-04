let counter = 0;
function fun() {
  counter ++;
  if(counter%100 === 0) {
    console.log(`fun invoked ${counter} times`)
  }
  fun();
}

fun();