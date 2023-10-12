/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let ret = 0;
  let i = 0,
    j = 1;

  while (i < j) {
    if (i === nums.length - 1) break;
    if (nums[i] === nums[j]) {
      ret++;
    }

    if (j === nums.length - 1) {
      i++;
      j = i + 1;
    } else {
      j++;
    }
  }
  console.log(ret);
  return ret;
};

numIdenticalPairs([1, 2, 3, 1, 1, 3]);
