const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {}
  domains = domains.map(item => { 
      item = item.split('.').map(it => it = `.${it}`).reverse()
      return item
  })
  domains.forEach(item => {
      for (let i = 0; i < item.length; i++) { // сколько раз перебирать каждый массив
          let str = []
          for (let j = 0; j <= i; j++) { // сколько строк выбирать
              str.push(item[j])
          }
          str = str.join('')
          obj[str] ? obj[str]+=1 : obj[str]=1
      }
  });
  return obj
}

module.exports = {
  getDNSStats
};
