// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// assertEqual("LHL", "Bootcamp");
// assertEqual(1, 1);

const assertEqual = require("./assertEqual");

const tail = function (array) {
  return array.slice(1);
};

console.log([1, 2, 3] === [1, 2, 3]);
console.log([1, 2, 3] == [1, 2, 3]);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

// console.log(result);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
