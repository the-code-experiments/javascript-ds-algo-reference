const debug = require('debug')('Stack');

/**
 * Data Structure: Stack
 */
module.exports = class Stack {
  constructor(props) {
    this.stack = [];
  }

  /**
   * Check if the stack is empty or not
   */
  isEmpty() {
    return !this.stack.length ? true : false;
  }

  /**
   * Push the data into an stack in last-in way
   * @param {*} data number|string|object
   */
  push(data) {
    debug(`\nLOG: Push ${data} into the stack`);
    this.stack.push(data);
  }

  /**
   * Pop the data from the stack in last-out way
   */
  pop() {
    if (this.isEmpty()) {
      return 'Warning: no data to Pop';
    }
    return this.stack.pop();
  }

  /**
   * Print the stack content
   */
  print() {
    const printData = this.stack.join(' ');
    debug(`\nLOG: Here is the stack content ${printData}`);
    return this.stack.join(' ');
  }

  /**
   * Get the peek of the stack without modifying the stack
   */
  peek() {
    const peekData = this.stack[this.stack.length - 1];
    debug(`\nLOG: ${peekData} is on peek of the stack`);
    return this.stack[this.stack.length - 1];
  }

  /**
   * Get the length of the stack
   */
  length() {
    const stackLen = this.stack.length;
    debug(`\nLOG: There are total ${stackLen} data in the stack`);
    return stackLen;
  }
}