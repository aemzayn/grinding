/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let n = piles.length - 1;
  if (h <= n) {
    // find the maximum banana
    return Math.max(...piles);
  }
};
