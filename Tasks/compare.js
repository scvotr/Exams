// Compare two dictionaries

let compare = (first_values, ...parameters_list) => {
  const second_values = parameters_list[0];
  let firstValuesKey = Object.keys(first_values);
  let b = Object.keys(second_values);
  if (firstValuesKey.join('-') !== b.join('-')) return false;
  let e = true;
  for (c of firstValuesKey) {
    if (first_values[c] === second_values[c]) e = e && true;
    else {
      e = e && false;
    }
  }
  return e;
};

require('../Tests/compare.js')(compare);
