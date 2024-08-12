// remember that a stack only supports operation in the last index(push,pop).A stack or plates is a common analogy

// creamos una clase Stack custom con varios metodos custom
class Stack {
  constructor() {
    this.items = [];
  }
  // given that we have to push an element push method has to accept that element has parameter
  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  // return the last element without removing it
  peek() {
    if(!this.isEmpty()){
      return this.items[this.items.length - 1];
    }
    return null;
  }

  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.size());
console.log(stack.print());
console.log(stack.pop());
console.log(stack.peek());
