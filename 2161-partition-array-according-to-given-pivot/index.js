/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  const smallers = [];
  const equals = [];
  const biggers = [];
  for (const n of nums) {
    if (n < pivot) {
      smallers.push(n);
    } else if (n > pivot) {
      biggers.push(n);
    } else {
      equals.push(n);
    }
  }
  return [...smallers, ...equals, ...biggers];
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
console.log(pivotArray([-3, 4, 3, 2], 2));
