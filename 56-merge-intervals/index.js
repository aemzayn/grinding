/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];

  for (let interval of intervals) {
    // if the list of merged intervals is empty or if the current
    // interval does not overlap with the previous, simply append it.
    console.log(
      merged[merged.length - 1]?.[1],
      interval[0],
      merged[merged.length - 1]?.[1] < interval[0]
    );

    if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
      merged.push(interval);
    } else {
      // otherwise, there is overlap, so we merge the current and previous
      // intervals.

      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        interval[1]
      );
    }
  }

  return merged;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
