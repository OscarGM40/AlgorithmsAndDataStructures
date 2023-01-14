// a queue must support enqueueing and dequeueing operations.We will implement peek,isEmpty,size and print as well

// The rear or tail of an array is its last position whereas the front is the first position
class Queue {
  constructor() {
    this.items = [];
  }
  // recuerda que una Queue inserta al final,pero remueve al principio
  enqueue(element) {
    this.items.push(element);
  }
  // recuerda que una Queue inserta al final,pero remueve al principio
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  // esta vez peek va a devolver el primero,ojo
  peek() {
    return this.isEmpty() ? null : this.items[0];
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
