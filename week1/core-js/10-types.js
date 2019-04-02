// JS is a loosely typed language.
// JS has types, we just don't need to specify type
// for variables

function typeCheck(a) {
  console.log(`a has a value of: ${a}
  and typeof: ${typeof(a)}`);
}

typeCheck(5);
typeCheck(true);
typeCheck('string');
typeCheck("double quote string");
typeCheck(`template literal`);
typeCheck(23532.32432);
typeCheck(false);
typeCheck(typeCheck);
typeCheck({});
typeCheck([1,2,3,4]);
typeCheck(null);
typeCheck(undefined);
typeCheck(NaN);
