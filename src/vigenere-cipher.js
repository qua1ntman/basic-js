const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  isNormal = true
  constructor (isNormal=true) {
      this.isNormal = isNormal
  }
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  encrypt(message, key) {
    if (!key || !message) throw Error('Incorrect arguments!')
    let result = []
    if (!this.isNormal) message = message.split('').reverse()
    else message = message.split('')
    let fullKey = ''
    let fullKeyIdx = 0
    message.forEach((el,ind) => {
      if(this.alphabet.includes(el.toUpperCase())) {
          fullKey += key[fullKeyIdx%(key.length)]
          fullKeyIdx++
      }
    });
    let idx = 0
    message.map(letter => {
      if (this.alphabet.includes(letter.toUpperCase())) {
          letter = this.alphabet[(this.alphabet.indexOf(letter.toUpperCase())+this.alphabet.indexOf(fullKey[idx].toUpperCase())) % 26]
          result.push(letter)
          idx++
      } else {
          result.push(letter)
      }
    })
    return result.join('')
  }
  decrypt(encryptedMessage, key) {
    if (!key || !encryptedMessage) throw Error('Incorrect arguments!')
    let result = []
    if (!this.isNormal) encryptedMessage = encryptedMessage.split('').reverse()
    else encryptedMessage = encryptedMessage.split('')
    let fullKey = ''
    let fullKeyIdx = 0
    encryptedMessage.forEach((el,ind) => {
      if(this.alphabet.includes(el.toUpperCase())) {
          fullKey += key[fullKeyIdx%(key.length)]
          fullKeyIdx++
      }
    });
    let idx = 0
    encryptedMessage.map(letter => {
      if (this.alphabet.includes(letter.toUpperCase())) {
          let alphIdx = this.alphabet.indexOf(letter.toUpperCase())-this.alphabet.indexOf(fullKey[idx].toUpperCase())
          letter = this.alphabet[alphIdx<0 ? alphIdx+26 : alphIdx % 26]
          result.push(letter)
          idx++
      } else {
          result.push(letter)
      }
    })
    return result.join('')
  }
} 

module.exports = {
  VigenereCipheringMachine
};
