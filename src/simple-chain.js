const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
      return this.chain.length
  },
  addLink(value) {
      if(!`${value}`) this.chain.push(' ')
      else this.chain.push(` ${value} `)
      return chainMaker
  },
  removeLink(position) {
      if (!this.chain[position-1] || position === 0 ) throw Error("You can't remove incorrect link!")
      this.chain.splice(position-1, 1)
      return chainMaker
  },
  reverseChain() {
      this.chain.reverse()
      return chainMaker
  },
  finishChain() {
      return `(${this.chain.join(')~~(')})`
  }
};


module.exports = {
  chainMaker
};
