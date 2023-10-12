/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  const result = [];
  for (const [xc, yc, rc] of queries) {
    let insideTotal = 0;
    for (const [xp, yp] of points) {
      const distance = Math.sqrt(
        Math.pow(Math.abs(xp - xc), 2) + Math.pow(Math.abs(yp - yc), 2)
      );
      if (distance <= rc) insideTotal += 1;
    }
    result.push(insideTotal);
  }

  return result;
};

countPoints(
  [
    [1, 3],
    [3, 3],
    [5, 3],
    [2, 2],
  ],
  [
    [2, 3, 1],
    [4, 3, 1],
    [1, 1, 2],
  ]
);
