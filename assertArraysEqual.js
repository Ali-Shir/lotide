const eqArrays = require("./eqArrays");

function assertArrayEqual(arr1, arr2) {
  const check = eqArrays(arr1, arr2);
  if (check) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

assertArrayEqual([1, 2, 3], [1, 2, 3]);

module.exports = assertArrayEqual;
