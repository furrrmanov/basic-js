module.exports = function countCats(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    count += matrix[i].filter(item => item == "^^").length;
  }
  return count;
};
