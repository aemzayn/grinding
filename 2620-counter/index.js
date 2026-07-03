/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let x = undefined;
  return function () {
    if (x === undefined) {
      x = n;
    } else {
      x++;
    }
    console.log(x);
    return x;
  };
};

const counter = createCounter(-2);
counter(); // 10
counter(); // 11
counter(); // 12
