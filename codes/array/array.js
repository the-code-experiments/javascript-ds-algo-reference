const debug = require('debug')('Array');

/**
 * Data Structure: Array
 */
module.exports = class Array {
  constructor() {
    this.array = [];
  }

  /**
   * Add data to an array
   * @param {*} data number|string|object
   */
  add(data) {
    debug(`\nLOG: add ${data} into the an array`);
    this.array.push(data);
  }

  /**
   * Remove the data from the array
   * @param {*} data number
   */
  removeByData(data) {
    debug(`\nLOG: remove ${data} from the array`);
    this.array = this.array.filter((current) => {
      return current !== data;
    });
  }

  /**
   * Search the array by data
   */
  searchByData(data) {
    debug(`\nLOG: search for the data inside the array`);
    
    const foundIndex = this.array.indexOf(data);
    if (foundIndex !== -1) {
      return `Info: found the ${data} in the array at ${foundIndex}`;
    }

    return `Info: didn't found the ${data} in the array`;
  }

  /**
   * Get the length of the array
   */
  length() {
    const arrayLen = this.array.length;
    debug(`\nLOG: There are total ${arrayLen} data in the array`);
    return arrayLen;
  }

  /**
   * Print the array content
   */
  print() {
    const printData = this.array.join(' ');
    debug(`\nLOG: Here is the array content ${printData}`);
    return this.array.join(' ');
  }
}