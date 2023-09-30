// Compare two dictionaries

let compare = (first_values, ...parameters_list) => {
  const second_values = parameters_list[0];
  let firstValuesKey = Object.keys(first_values);
  let secondValuesKeys = Object.keys(second_values);
  if (firstValuesKey.join('-') !== secondValuesKeys.join('-')) return false;
  let isMatch = true;
  for (currentKey of firstValuesKey) {
    if (first_values[currentKey] === second_values[currentKey]) isMatch = isMatch && true;
    else {
      isMatch = isMatch && false;
    }
  }
  return isMatch;
};

require('../Tests/compare.js')(compare);
