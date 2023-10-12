const numbers = [1, 3, 4, 5, 7, 10, 11];

var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    currSum = numbers[left] + numbers[right];
    if (currSum > target) {
      right -= 1;
    } else if (currSum < target) {
      left += 1;
    } else {
      return [left + 1, right + 1];
    }
  }
};

console.log(twoSum(numbers, 9));
