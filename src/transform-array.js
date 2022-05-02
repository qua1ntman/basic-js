const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) throw Error("'arr' parameter must be an instance of the Array!")
  arr.map((item, index) => {
    if (arr[index] === '--discard-next') arr.splice(index, 2) 
    if (arr[index] === '--discard-prev') {
      if(index === 0) arr.splice(index, 1)
      else arr.splice(index-1, 2) 
    } 
    if (arr[index] === '--double-next') {
      if(index !== arr.length - 1) arr[index+1] *= 2
      arr.splice(index, 1) 
    }
    if (arr[index] === '--double-prev') {
      arr[index-1] *= 2
      arr.splice(index, 1) 
    }
    
  })
  return arr
}

module.exports = {
  transform
};
