let a: string = 'hello';

// can't run this because a is of type string
//a = 5;
console.log(a);

function fun(one: number, two: number, ...params: number[]): number {
  return one + two;
}

let result: number;
result = fun(5, 10, 25);
console.log(result);

