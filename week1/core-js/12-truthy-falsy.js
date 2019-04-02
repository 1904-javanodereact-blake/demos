function testTruthy(param) {
  console.log(`param = ${param}
  of type: ${typeof(param)}
  evaluates to: ${!!param}`); // force param into a boolean context
}

testTruthy(0);
testTruthy('0');
testTruthy(5);
testTruthy(-1);
testTruthy('false');
testTruthy('');
testTruthy(true);
testTruthy(false);
testTruthy([]);
testTruthy({});
testTruthy(NaN);
testTruthy(undefined);
testTruthy(null);
testTruthy(testTruthy);