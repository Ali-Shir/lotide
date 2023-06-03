function assertArrayEqual(arr1, arr2) {
  const check = eqArrays(arr1, arr2);
  if (check) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const eqArrays = function(arr1, arr2) {
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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

const positions = letterPositions("hello");
assertArrayEqual(positions["h"], [0]);
assertArrayEqual(positions["e"], [1]);
assertArrayEqual(positions["l"], [2, 3]);
// assertArrayEqual(positions["l"], [3]);
assertArrayEqual(positions["o"], [4]);