var SubrectangleQueries = function (rectangle) {
  this.rectangle = rectangle;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (
  row1,
  col1,
  row2,
  col2,
  newValue
) {
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      this.rectangle[i][j] = newValue;
    }
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
  return this.rectangle.at(row).at(col);
};

var obj = new SubrectangleQueries([
  [1, 2, 1],
  [4, 3, 4],
  [3, 2, 1],
  [1, 1, 1],
]);

var value = obj.getValue(0, 2);

obj.updateSubrectangle(0, 0, 3, 2, 5);

value = obj.getValue(0, 2);

value = obj.getValue(3, 1);

obj.updateSubrectangle(3, 0, 3, 2, 10);

value = obj.getValue(3, 1);

value = obj.getValue(0, 2);
