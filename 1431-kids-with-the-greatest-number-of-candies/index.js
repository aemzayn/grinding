var kidsWithCandies = function (candies, extraCandies) {
  const result = [];
  const greatest = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= greatest);
  }
  return result;
};

kidsWithCandies([2, 3, 5, 1, 3], 3);
