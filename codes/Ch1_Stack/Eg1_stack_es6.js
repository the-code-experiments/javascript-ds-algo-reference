class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    console.log('Pushed %d into the stack', value)
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  print() {
    console.log('Stack: ', this.stack.join(' '));
  }

  length() {
    return this.stack.length;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
};

let stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);

stack.print();

console.log('Stack length: ', stack.length());

console.log('Stack peek reached to: ', stack.peek());

console.log('Pop ' + stack.pop() + ' from Stack');

console.log('Check again Stack length: ', stack.length());

stack.print();