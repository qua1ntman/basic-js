const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  n = `${n}`.split('')
  let max = 0
  for (let i = 0; i < n.length; i++) {
      console.log(n)
      let now = [...n]
      now.splice(i, 1)
      console.log();
      if (now.join('') > max) max = now.join('')
  }
  return +max
}

module.exports = {
  deleteDigit
};
