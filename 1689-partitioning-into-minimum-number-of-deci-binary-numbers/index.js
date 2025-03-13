/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  return Math.max(...n.split("").map(Number));
};

console.log(minPartitions("32"));
console.log(minPartitions("823734"));
console.log(minPartitions("27346209830709182346"));
