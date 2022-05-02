const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  n = n.split('-')
  let isTrue = true
  if (n.length !== 6) isTrue = false
  n.map(item => {
      console.log(item.length);
    if (item.length !== 2) isTrue = false
    else if (!(item[0].match(/[0-9A-F]/))) isTrue = false
    else if (!(item[1].match(/[0-9A-F]/))) isTrue = false
  });
  return isTrue
}
module.exports = {
  isMAC48Address
};
