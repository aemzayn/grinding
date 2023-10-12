/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]");
};

console.log(defangIPaddr("255.100.50.0"));
