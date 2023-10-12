/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let value = 0;
  const fns = (val, op) => {
    switch (op) {
      case "++X":
      case "X++":
        return val + 1;
      case "--X":
      case "X--":
        return val - 1;
      default:
        return val;
    }
  };
  for (const operation of operations) {
    value = fns(value, operation);
  }
  return value;
};

const val = finalValueAfterOperations(["--X", "X++", "X++"]);
console.log(val);
