const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let newArr = []
  let betweenArr = []
  for (let i=0; i<arr.length; i++) {
      if (arr[i]==-1) {
          betweenArr.push(i)
      }
  }
  arr = arr.filter(item => item !== -1).sort((a,b) => a-b)
  console.log(arr);
  console.log(betweenArr);
  for (let h = 0; h<(arr.length+betweenArr.length); h++) {
      console.log(betweenArr[0], h);
      if (betweenArr[0] == h) {
          newArr.push(-1)
          betweenArr.shift()
          arr.unshift('')
      } else {
          newArr.push(arr[h])
      }
  }
  return newArr
}

module.exports = {
  sortByHeight
};
