const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  str = `${str}`
  let mainArr = []
  let additionArr = []
  if (options.hasOwnProperty('additionRepeatTimes') && options.hasOwnProperty('addition')) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {        
      additionArr.push(`${options.addition}` || '')
    }
  } else {
    if (options.hasOwnProperty('addition')) additionArr.push(`${options.addition}`)
  }
  if (options.additionSeparator) additionArr = additionArr.join(`${options.additionSeparator}`)
  else additionArr = additionArr.join('|')
  str += additionArr
  if (options.repeatTimes) {
    for (let q = 0; q < options.repeatTimes; q++) {
      mainArr.push(str)
    }
  } else {
    mainArr.push(str)
  }
  if (options.separator) mainArr = mainArr.join(`${options.separator}`)
  else mainArr = mainArr.join('+')
  return mainArr
}

module.exports = {
  repeater
};
