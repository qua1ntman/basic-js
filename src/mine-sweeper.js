const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let newArr = []
  for (let i = 0; i < matrix.length; i++) {
      let arr = []
      for (let h = 0; h < matrix[i].length; h++) {
          console.log('matrix items',matrix[i][h]);
          let bombs = 0
          for (let y = i-1; y <= i+1; y++) {
              for (let x = h-1; x <= h+1; x++) {
                  if (y>=0 && y<matrix.length && x>=0 && x<matrix[i].length) {
                      if (matrix[y][x] === true) bombs+=1
                  }
              }
          }
          arr.push(bombs)
          if (matrix[i][h] === true) arr[h] = 1
      }
      newArr.push(arr)
  }
  return newArr
}

module.exports = {
  minesweeper
};
