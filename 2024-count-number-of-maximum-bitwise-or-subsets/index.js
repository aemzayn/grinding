/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let max = 0;
  let res = 0;
  for (const n of nums) max = n | max;

  function backTrack(arr, start, value) {
    if (value === max) res += 1;
    for (let i = start; i < arr.length; i++) {
      console.log(arr.slice(i, arr.length));

      backTrack(arr, i + 1, value | arr[i]);
    }
  }

  backTrack(nums, 0, 0);

  return res;
};

// console.log(countMaxOrSubsets([3, 1]));
// console.log(countMaxOrSubsets([2, 2, 2]));
console.log(countMaxOrSubsets([3, 2, 1, 5]));
