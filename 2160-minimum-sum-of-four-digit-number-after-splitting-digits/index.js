/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  let arr = num.toString().split("").map(Number);
  const min1 = Math.min(...arr);
  const min1Index = arr.findIndex((v) => v === min1);
  arr.splice(min1Index, 1);

  const min2 = Math.min(...arr);
  const min2Index = arr.findIndex((v) => v === min2);
  arr.splice(min2Index, 1);

  const result = eval(`${min1}${arr[0]} + ${min2}${arr[1]}`);
  return result;
};

minimumSum(2436);
