const debug = require('debug')('Queue');

/**
 * Data Structure: Queue
 */
module.exports = class Queue {
  constructor() {
    this.queue = [];
  }

  /**
   * Push data into the queue
   * @param {*} data number|string|object
   */
  enqueue(data) {
    debug(`\nLOG: push ${data} into the queue`);
    this.queue.push(data);
  }
  /**
   * Shift data in the queue
   */
  denqueue() {
    debug(`\nLOG: remove the queue`);
    this.queue.shift();
  }

  /**
   * Get the peek data from the queue without modifing the queue
   * 
   * Note: Queue is First-in First-out
   */
  peek() {
    const peekData = this.queue[0];
    debug(`\nLOG: ${peekData} is on peek of the queue`);
    return peekData;
  }

  /**
   * Get the length of the queue
   */
  length() {
    const queueLen = this.queue.length;
    debug(`\nLOG: There are total ${queueLen} data in the queue`);
    return queueLen;
  }

  /**
   * Print the queue content
   */
  print() {
    const printData = this.queue.join(' ');
    debug(`\nLOG: Here is the queue content ${printData}`);
    return this.queue.join(' ');
  }
}