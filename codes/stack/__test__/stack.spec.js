const Stack = require('../stack');

describe('Stack ::', () => {
  it('should check if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeFalsy();
  });

  it('should check if the stack is not empty', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('should check warning for pop the empty stack', () => {
    const stack = new Stack();
    expect(stack.pop()).toBe('Warning: no data to Pop');
  });

  it('should check length of the stack', () => {
    const stack = new Stack();

    // Push some number data into the Stack
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.length()).toBe(5);
  });

  it('should check peek number data of the stack', () => {
    const stack = new Stack();

    // Push some number data into the Stack
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.peek()).toBe(5);
  });

  it('should check stack content (in number)', () => {
    const stack = new Stack();

    // Push some number data into the Stack
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.print()).toBe('1 2 3 4 5');
  });
  
  it('should check stack content (in number) after pop', () => {
    const stack = new Stack();

    // Push some number data into the Stack
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.length()).toBe(5);

    // Pop some number data into the Stack
    stack.pop();
    stack.pop();

    // Recheck the data into the Stack
    expect(stack.length()).toBe(3);
  });

  it('should check stack content (in string) after pop', () => {
    const stack = new Stack();

    // Push some string data into the Stack
    stack.push('Hello');
    stack.push('My');
    stack.push('name');
    stack.push('is');
    stack.push('Ashwin');

    expect(stack.print()).toBe('Hello My name is Ashwin');

    // Pop some data from the Stack
    stack.pop();
    stack.pop();

    // Recheck the data into the Stack
    expect(stack.print()).toBe('Hello My name');
  });

  it('should check stack content (in object) after pop', () => {
    const stack = new Stack();

    // Push some string data into the Stack
    stack.push({'id': 1});
    stack.push({'name': 'Ashwin'});
    stack.push({'work': 'Engineer'});
    stack.push({'hobby': 'Photography'});

    expect(stack.length()).toBe(4);

    // Pop some data from the Stack
    stack.pop();

    // Recheck the data into the Stack
    expect(stack.length()).toBe(3);
  });

});