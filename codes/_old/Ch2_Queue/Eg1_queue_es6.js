/**
 * Data Structure: Queue
 * ES5 version
 * Run `node Eg1_queue_es6.js` and see the output
 */
class Queue {
  constructor () {
    this.queue = []
  }

  /**
   * Push data into the queue
   * @params {number} data - Data to be pushed into the queue
   * @function enqueue
   */
  enqueue (data) {
    console.log('Push %d into the queue', data)
    this.queue.push(data)
  }

  /**
   * Shilf the queue
   * @function dequeue
   */
  dequeue () {
    console.log('Dequeue the queue')
    return this.queue.shift()
  }

  /**
   * Print the queue as string
   * @function print
   */
  print () {
    console.log('Queue: ', this.queue.join(' '))
  }

  /**
   * Get the peek of the queue
   * @function peek
   */
  peek () {
    return this.queue[0]
  }

  /**
   * Get the queue length
   * @function length
   */
  length () {
    return this.queue.length
  }
}

/**
 * Create queue instance
 */
var queue = new Queue()

/**
 * Add few data into the queue
 */
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(15)
queue.enqueue(20)

/**
 * Print the queue to verify data got added into the queue
 */
queue.print()

/**
 * Get queue length
 */
console.log('Current queue length is %d', queue.length())

/**
 * Get the peek of the queue
 */
console.log('%d is the queue peek: ', queue.peek())

/**
 * Pop data from the queue
 */
queue.dequeue()

/**
 * Again check the queue print
 */
queue.print()

