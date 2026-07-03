class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val) {
    this.stack.push(val);
    val = Math.min(
      val,
      this.minStack.length === 0
        ? val //
        : this.minStack[this.minStack.length - 1]
    );
    console.log(val, this.minStack);

    this.minStack.push(val);
  }
  pop() {
    this.stack.pop();
    this.minStack.pop();
    console.log(this.minStack);
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    console.log(this.minStack);
    return this.minStack[this.minStack.length - 1];
  }
}

const m = new MinStack();
m.push(-2);
m.push(0);
m.push(-3);
console.log(m.getMin());
m.pop();
m.top();
console.log(m.getMin());
