const transpose = function(matrix) {
  const newMatrix = [];
  const numOfColumns = matrix[0].length;
  const numOfRows = matrix.length;
  for (let x = 0; x < numOfColumns; x++) {
    newMatrix.push([]);
  }

  for (let i = 0; i < numOfRows; i++) {
    for (let j = 0; j < numOfColumns; j++) {
      newMatrix[j].push(matrix[i][j]);
    }
  }

  return newMatrix;
};
module.exports = transpose;