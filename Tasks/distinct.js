// Return an array without duplicates

const distinct = (data) => {
  const collection = new Set();
  let currentIndex  = 0;
  data.forEach((a) => {
    if (collection.has(a)) {
      delete data[currentIndex];
    } else {
      collection.add(a);
    }
    currentIndex++;
  });
  return data.filter
  (x => typeof x === 'number');
};

require('../Tests/distinct.js')(distinct);
