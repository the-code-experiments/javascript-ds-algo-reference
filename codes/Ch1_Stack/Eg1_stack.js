function Stack() {
  this.stack = [];
}

Stack.prototype.push = function(value) {
  console.log('Pushed %d into the stack', value)
  this.stack.push(value);
}

Stack.prototype.pop = function() {
  return this.stack.pop();
}

Stack.prototype.print = function() {
  console.log('Stack: ', this.stack.join(' '));
}

Stack.prototype.peek = function() {
  return this.stack[this.stack.length - 1];
}

Stack.prototype.length = function() {
  return this.stack.length;
}

var stack = new Stack();

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