var binarySearch = function (list, target) {
  let left = 0,
    right = list.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (list[mid] < target) {
      left = mid + 1;
    } else if (list[mid] > target) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let found = false;
  for (let i = 0; i < matrix.length; i++) {
    const last = matrix[i][matrix[i].length - 1];
    if (target > last) continue;
    found = binarySearch(matrix[i], target);
    break;
  }
  return found;
};
