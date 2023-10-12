/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const ret = [];
  for (let i = 0, j = n; i < n, j < nums.length; i++, j++) {
    ret.push(nums[i], nums[j]);
  }
  return ret;
};

shuffle([2, 5, 1, 3, 4, 7], 3);
