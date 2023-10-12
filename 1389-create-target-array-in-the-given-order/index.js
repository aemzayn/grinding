/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.splice(index[i], 0, nums[i]);
  }
  return result;
};

createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]); // [0,4,1,3,2]
