class Node {
  // again a Node has two properties
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // the list now will have two pointers
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return console.log(`The size of the list is ${this.size}`);
  }

  print() {
    if (this.isEmpty()) {
      return console.log("List is empty.Nothing to print");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      return console.log(listValues);
    }
  }
  prepend(value) {
    const node = new Node(value);
    // if it is empty we reassign both pointers,else we move one position backwards(reassigning this.head and node.next,but not in this order)
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      // hay que mover el tail.next antes que el tail ??
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return console.log("the list is already empty");
    }
    // if there is value we store the value for returning purposes
    const value = this.head.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      this.head = this.head.next;
      this.size--;
    }
    return console.log(`${value} removed from front`);
  }

  removeFromTail() {
    if (this.isEmpty()) {
      return console.log("the list is already empty");
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // si hay varios hay que ir hasta el ultimo
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = this.prev;
    }
    this.size--;
    return console.log(`${value} removed from front`);
  }
}
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print();
list.getSize();
list.removeFromFront()
list.print();
list.removeFromTail()
list.print();
