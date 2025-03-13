/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
// var findThePrefixCommonArray = function (A, B) {
//   const C = [];

//   const aSet = new Set();
//   const bSet = new Set();
//   for (let i = 0; i < A.length; i++) {
//     const a = A[i];
//     const b = B[i];
//     aSet.add(a);
//     bSet.add(b);
//     const c = aSet.intersection(bSet).size;
//     C.push(c);
//   }

//   return C;
// };

var findThePrefixCommonArray = function (A, B) {
  const n = A.length;
  const result = new Array(n).fill(0);
  const count = new Array(n + 1).fill(0);
  let common = 0;

  for (let i = 0; i < n; i++) {
    count[A[i]]++;
    if (count[A[i]] === 2) common++;
    count[B[i]]++;
    if (count[B[i]] === 2) common++;
    result[i] = common;
  }
  return result;
};

console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]));
console.log(findThePrefixCommonArray([2, 3, 1], [3, 1, 2]));
