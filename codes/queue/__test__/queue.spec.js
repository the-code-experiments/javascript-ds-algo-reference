const Queue = require('../queue');

describe('Queue ::', () => {

  it('should able to get the length of queue', () => {
    const queue = new Queue();
    
    // Add few data into an queue
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);

    expect(queue.length()).toBe(5);
  });

  it('should able to remove few data and reverify the length of an queue', () => {
    const queue = new Queue();

    // Add few data into an queue
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);

    expect(queue.length()).toBe(5);

    // Remove few data from an queue
    queue.denqueue();
    queue.denqueue();

    expect(queue.length()).toBe(3);
  });

  it('should able to print the queue content', () => {
    const queue = new Queue();

    // Add few data into an queue
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);

    expect(queue.print()).toBe('1 2 3 4 5');
  });

});