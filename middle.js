const eqArrays = require("./eqArrays");

const assertArrayEqual = require("./assertArrayEqual");

const middle = function (array) {
  const arrLength = array.length;
  if (arrLength <= 2) {
    return [];
  }
  const middleIndex = Math.floor(arrLength / 2);
  if (arrLength % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};

module.exports = middle;
