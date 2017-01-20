/**
 * Data Structure: Stack
 * ES6 version
 * Run `node Eg1_stack_es6.js` and see the output
 */

class Stack {
  constructor () {
    this.stack = []
  }

  /**
   * Push data into the stack
   * @params {number} data - Data to be pushed into the stack
   * @function push
   */
  push (data) {
    console.log('Push %d into the stack', data)
    this.stack.push(data)
  }

  /**
   * Pop data from the stack
   * @function pop
   */
  pop () {
    console.log('Pop from the stack')
    return this.stack.pop()
  }

  /**
   * Print the stack as string
   * @function print
   */
  print () {
    console.log('Stack: ', this.stack.join(' '))
  }

  /**
   * Get the peek of the stack
   * @function peek
   */
  peek () {
    return this.stack[this.stack.length - 1]
  }

  /**
   * Get the stack length
   * @function length
   */
  length () {
    return this.stack.length
  }
}

/**
 * Create Stack instance
 */
var stack = new Stack()

/**
 * Add few data into the stack
 */
stack.push(5)
stack.push(10)
stack.push(15)
stack.push(20)

/**
 * Print the stack to verify data got added into the stack
 */
stack.print()

/**
 * Get stack length
 */
console.log('Current stack length is %d', stack.length())

/**
 * Get the peek of the stack
 */
console.log('%d is the stack peek: ', stack.peek())

/**
 * Pop data from the stack
 */
stack.pop()

/**
 * Again check the stack print
 */
stack.print()
