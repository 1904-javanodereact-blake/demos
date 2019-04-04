// we can compare objects with == or ===
// === is preferred because it compares both type and value
// == is less preferred because it attempts type coercion
//      to ignore type and just compare value

function compare(one, two) {
  console.log(`
one = ${one} and has type: ${typeof(one)}
two = ${two} and has type: ${typeof(two)}
  one == two returns: ${one == two}
  one === two returns: ${one === two}`);
}

compare(5, '5');
compare(true, 'true');
compare(null, undefined);
compare(null, NaN);
compare(NaN, NaN);
compare({}, {});
compare([], []);
compare({}, []);
compare({}, null);
compare(true, false);