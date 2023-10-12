/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  return nums.map(
    (val, i, arr) => arr.filter((n, j) => val > n && i !== j).length
  );
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
