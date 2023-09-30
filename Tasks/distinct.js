// Return an array without duplicates

const distinct = (data) => {
  const collection = new Set();
  w = 0;
  data.forEach((a) => {
    if (collection.has(a)) {
      delete data[w];
    } else {
      collection.add(a);
    }
    w++;
  });
  return data.filter
  (x => typeof x === 'number');
};

require('../Tests/distinct.js')(distinct);
