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

const without = function(sourceArray, itemsToRemoveArray) {
  //initialized the result
  const check = [];
  //go through all the items in the array
  for (let i = 0; i < sourceArray.length; i++) {
    //define variabble
    let item = sourceArray[i];
    //condition to remove the array
    if (!itemsToRemoveArray.includes(item)) {
      check.push(item);
    }
  }
  return check;
};

console.log(assertArrayEqual(without([1, 2, 3], [1]), [2, 3]));
// console.log(without);
// assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]))

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(words, ["hello", "world", "lighthouse"]);
