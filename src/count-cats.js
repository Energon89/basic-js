module.exports = function countCats(matrix) {
  return Array.isArray(matrix) && matrix.length ?
    matrix.reduce((result, currentLine) => {
      let resultInLine = 0;
      currentLine.forEach(element => element === '^^' ? (resultInLine += 1) : 0);
      return result + resultInLine;
    }, 0) : 0;
};
