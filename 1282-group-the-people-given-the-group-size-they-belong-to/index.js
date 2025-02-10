/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const groups = {};
  for (let i = 0; i < groupSizes.length; i++) {
    groups[groupSizes[i]] ??= [];
    groups[groupSizes[i]].push(i);
  }
  const answers = [];
  for (const group in groups) {
    let members = groups[group];
    let slice = +group;
    let sliceStart = 0;
    while (members.length > 0) {
      const slicedMembers = members.slice(sliceStart, slice);
      answers.push(slicedMembers);
      members = members.slice(slice);
    }
  }
  return answers;
};

const result = groupThePeople([3, 3, 3, 3, 3, 1, 3]);
console.log(result);
