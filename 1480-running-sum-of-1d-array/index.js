/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = nums.map((_, i, arr) => {
    return arr.slice(0, i + 1).reduce((p, c) => p + c, 0);
  });
  console.log(result);
  return result;
};

runningSum([1, 2, 3, 4]);
