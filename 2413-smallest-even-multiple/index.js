/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  return n % 2 === 0 ? n : 2 * n;
};

let val = smallestEvenMultiple(5);
console.log(val);
