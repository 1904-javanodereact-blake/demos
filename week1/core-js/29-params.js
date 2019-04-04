
function fun(a, b = 25, ...params) {
  console.log(`
a = ${a}
b = ${b}
params = ${params}`)
}

fun(5, 10);
fun(5);
fun(2, 8, 15, 'hello', 35, 4);