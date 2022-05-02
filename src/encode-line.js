const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = ''
  let num = 0
  str = str.split('')
  for (let i = 0; i < str.length; i++) {
      if (i === 0) num++ 
      else if (i === str.length-1) { 
          if (str[i] === str[i-1]) {
              res+=`${num+1}${str[i]}`
          }
          else {
            res+=`${num === 1 ? '' : num}${str[i-1]}`
            res+=`${str[i]}`      
          }
      }
      else if (str[i] === str[i-1]) num++
      else { 
          res+=`${num == 1 ? '' : num}${str[i-1]}`
          num = 1
      }
  } 
  return res
}

module.exports = {
  encodeLine
};
