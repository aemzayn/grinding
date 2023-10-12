var sample = [
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let sum = 0;
  const height = grid.length,
    width = grid[0].length;

  function checkBuilding(x, y) {
    let row = [];
    let column = [];
    // x axis
    for (let i = 0; i < width; i++) {
      if (i !== y) {
        row.push(grid[x][i]);
      }
    }

    // y axis
    for (let j = 0; j < width; j++) {
      if (j !== x) {
        column.push(grid[j][y]);
      }
    }

    const possiblehigh = Math.min(Math.max(...row), Math.max(...column));

    console.log(x, y, `(${grid[x][y]} => ${possiblehigh})`, [row, column]);

    return possiblehigh > grid[x][y] ? possiblehigh : grid[x][y];
  }

  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      let possiblehigh = checkBuilding(x, y);
      // grid[x][y] = possiblehigh;
      sum += possiblehigh - grid[x][y];
    }
    console.log("---");
  }
  console.log("total", sum);
  // console.log("after", JSON.stringify(grid, null, 4));
  return sum;
};

maxIncreaseKeepingSkyline(sample);
