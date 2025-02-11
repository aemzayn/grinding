/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  let startRow = 0,
    startCol = 0,
    endRow = 0,
    endCol = 0;
  let empty = 0;

  const m = grid.length;
  const n = grid[0].length;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1) {
        startRow = row;
        startCol = col;
      } else if (grid[row][col] === 2) {
        endRow = row;
        endCol = col;
      } else if (grid[row][col] === 0) {
        empty += 1;
      }
    }
  }

  let output = 0;
  const visited = new Set();

  function dfs(r, c, visited, walk) {
    if (r === endRow && c === endCol) {
      if (walk === empty + 1) {
        output += 1;
      }
      return;
    }

    if (
      0 <= r &&
      r < m &&
      0 <= c &&
      c < n &&
      grid[r][c] !== -1 &&
      !visited.has(`${r}|${c}`)
    ) {
      visited.add(`${r}|${c}`);
      for (const [i, j] of [
        [0, -1],
        [0, 1],
        [1, 0],
        [-1, 0],
      ]) {
        dfs(r + i, c + j, visited, walk + 1);
      }
      visited.delete(`${r}|${c}`);
    }
  }

  dfs(startRow, startCol, visited, 0);

  return output;
};

let a = uniquePathsIII([
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 2, -1],
]);
console.log(a);
