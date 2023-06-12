// const actual = "Lighthouse Labs";
// const expected = "Bootcamp";

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } /* if (actual !== expected) */ else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual(actual, expected)
// assertEqual("✅✅✅", "🛑🛑🛑");
// assertEqual(1, 1);


module.exports = assertEqual;