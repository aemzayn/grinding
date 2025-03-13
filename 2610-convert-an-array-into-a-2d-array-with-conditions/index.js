/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const result = [[]];
  const last = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (last[n]) {
      if (!result[last[n]]) {
        result[last[n]] = [];
      }
      result[last[n]].push(n);
      last[n] += 1;
    } else {
      result[0].push(n);
      last[n] = 1;
    }
  }

  return result;
};

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));
