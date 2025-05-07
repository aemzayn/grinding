/**
 * @param {number} n
 * @return {number}
 */
// var countVowelStrings = function (n) {
//   let a = 1,
//     e = 1,
//     i = 1,
//     o = 1,
//     u = 1;
//   while (n-- > 1) {
//     a = a + e + i + o + u;
//     e = e + i + o + u;
//     i = i + o + u;
//     o = o + u;
//   }
//   return a + e + i + o + u;
// };
var countVowelStrings = function (n) {
  function backtrack(index = 0, strLength = 0, memo = {}) {
    const key = index + "_" + strLength;

    if (memo[key]) return memo[key];

    if (strLength === n) {
      return 1;
    }

    if (strLength > n) return 0;

    let alls = 0;
    for (let i = index; i < 5; i++) {
      alls += backtrack(i, strLength + 1, memo);
    }

    memo[key] = alls;

    return alls;
  }

  return backtrack();
};

console.log(countVowelStrings(2));
