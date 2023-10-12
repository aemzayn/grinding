/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.big = Array(big).fill(null);
  this.medium = Array(medium).fill(null);
  this.small = Array(small).fill(null);
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  let park;
  switch (carType) {
    case 1:
      park = this.big;
      break;
    case 2:
      park = this.medium;
      break;
    case 3:
      park = this.small;
      break;
    default:
      return false;
  }

  let emptySlotIndex = park.findIndex((slot) => slot === null);
  if (emptySlotIndex !== -1) {
    park[emptySlotIndex] = carType;
    return true;
  } else {
    return false;
  }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

var obj = new ParkingSystem(1, 1, 0);

let res = obj.addCar(1);
console.log(res);

res = obj.addCar(2);
console.log(res);

res = obj.addCar(3);
console.log(res);

res = obj.addCar(1);
console.log(res);
