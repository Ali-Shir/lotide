const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

function assertArrayEqual(arr1, arr2) {
  const check = eqArrays(arr1, arr2);
  if (check) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertArrayEqual(results1, ["g", "c", "t", "m", "t"]);

// console.log(results1);

const results2 = map(words, word => word.length);
assertArrayEqual(results2, [6, 7, 2, 5, 3]);

const results3 = map(words, word => word.toUpperCase());
assertArrayEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);