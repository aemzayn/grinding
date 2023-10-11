function visualizeMatrix(matrix, title) {
  let out = "";
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const val = matrix[y][x];
      let addition = { right: "", left: "" },
        sep = ",";
      if (x === 0) {
        addition.left = "[";
      } else if (x === matrix[y].length - 1) {
        sep = "";
        addition.right = "]";
      }
      out += `${addition.left}${val}${sep}${addition.right}`;
    }
    out += "\n";
  }
  console.log(`${title ? title + "\n" : null}${out}`);
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const zeroIndexes = [];
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const val = matrix[y][x];
      if (val === 0) {
        zeroIndexes.push({ x, y, xN: matrix[y].length, yN: matrix.length });
      }
    }
  }

  visualizeMatrix(matrix, "before");

  for (const { x, y, xN, yN } of zeroIndexes) {
    let i = 0;
    while (i < yN) {
      console.log(i, xN);
      matrix[i][x] = 0;
      i++;
    }

    i = 0;
    while (i < xN) {
      matrix[y][i] = 0;
      i++;
    }
  }

  visualizeMatrix(matrix, "after");
};

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(matrix);
