// Return an array without duplicates

const distinct = (data) => {
  const collection = new Set();
  let currentIndex  = 0;
  data.forEach((currentElement ) => {
    if (collection.has(currentElement )) {
      delete data[currentIndex];
    } else {
      collection.add(currentElement );
    }
    currentIndex++;
  });
  return data.filter
  (x => typeof x === 'number');
};

require('../Tests/distinct.js')(distinct);
