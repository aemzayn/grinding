/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
  let ret = [];
  const sum = (arr) => arr.reduce((prev, curr) => prev + curr, 0);
  for (let i = 0; i < nums.length; i++) {
    let left = sum(nums.slice(0, i));
    let right = sum(nums.slice(i + 1, nums.length));
    ret.push(Math.abs(left - right));
  }
  return ret;
};

leftRigthDifference([10, 4, 8, 3]);
