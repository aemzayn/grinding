Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

const arr = [null, {}, 3, { key: "value" }];
console.log(arr.last());
