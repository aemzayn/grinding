/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  if (nums.length <= 1) return nums;
  const map = {};
  let keyId = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    map[n] ??= 0;
    map[n] += 1;
    keyId = Math.min(n, keyId);
  }
  let i = 0;
  while (i < nums.length) {
    if (!map[keyId]) {
      keyId += 1;
      continue;
    }
    nums[i] = keyId;
    i++;
    map[keyId]--;
  }
  console.log(nums);
};

sortColors([0, 2]);
