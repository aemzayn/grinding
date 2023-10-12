/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
  let result = "";
  let hashMap = {};
  for (let c in s.split("")) {
    hashMap[c] ??= { words: [] };
    if (
      hashMap[c].words.length < 1 ||
      hashMap[c].words.at(-1).length < repeatLimit
    ) {
      hashMap[c].words.at(-1).push(c);
    } else {
      hashMap[c].words.push([c]);
    }
  }
  console.log(hashMap);
};

repeatLimitedString("cczazcc");
