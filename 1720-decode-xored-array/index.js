/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  const result = Array(encoded.length - 1).fill(0);
  result[0] = first;
  for (let i = 0; i < encoded.length; i++) {
    result[i + 1] = result[i] ^ encoded[i];
  }
  return result;
};

decode([1, 2, 3], 1);
