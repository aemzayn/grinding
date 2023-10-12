/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  function isPalindromic(s) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
      if (s[i] !== s[j]) return false;
    }
    return true;
  }

  for (let base = 2; base <= n - 2; base++) {
    if (!isPalindromic(n.toString(base))) {
      return false;
    }
  }
  return true;
};

let result = isStrictlyPalindromic(9);
console.log(result);
