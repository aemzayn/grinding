/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let result = 0;
  const jewelsSet = new Set(jewels.split(""));
  for (const stone of stones) {
    if (jewelsSet.has(stone)) result++;
  }
  return result;
};

numJewelsInStones("aA", "aAAbbbb");
