/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  const length = score.length;
  const result = Array(length).fill([]);
  const sortedScore = [];

  for (let i = 0; i < length; i++) {
    sortedScore.push({ score: score[i][k], index: i });
  }

  sortedScore.sort((a, b) => b.score - a.score);

  for (let i = 0; i < sortedScore.length; i++) {
    result[i] = score[sortedScore[i].index];
  }
  return result;
};

sortTheStudents(
  [
    [10, 6, 9, 1],
    [7, 5, 11, 2],
    [4, 8, 3, 15],
  ],
  2
);
