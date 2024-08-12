class CircularQueue {
  constructor(capacity) {
    //  remember that the circular queue has a fixed capacity
    this.items = new Array(capacity);
    // we need the size stored in a variable for modularizing operations(this.front + 1) % this.capacity
    this.capacity = capacity;
    // we need the currentLength in all moment
    this.currentLength = 0;
    // también vamos a tener dos punteros que de momento apuntan afuera de la structure
    this.rear = -1;
    this.front = -1;
  }
  // si el currentLength es igual obviously is full
  isFull() {
    return this.currentLength === this.capacity;
  }
  // it will be empty if currentLength is zero
  isEmpty() {
    return this.currentLength === 0;
  }
  // si no está lleno recuerda que una Queue inserta al final luego incrementamos this.rear y asignamos con su nuevo indice.Movemos los punteros restantes
  enqueue(element) {
    if (!this.isFull()) {
      // si rear es 6 será 2(tiene que dar una vuelta)
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      // si front apuntaba a -1 lo movemos al mismo indice que apunte el rear(fijate que se quedará en el indice 0)
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  // si la cola no está vacia reasignamos a null en el front y movemos punteros
  dequeue() {
    if (!this.isEmpty()) {
      const item = this.items[this.front];
      // dado que no queremos disminuir el array asignamos un null a this.front
      this.items[this.front] = null;
      // movemos el puntero del front
      this.front = (this.front + 1) % this.capacity;
      this.currentLength--;
      // si quedará vacia la cola(solo habia un elemento) sacamos los punteros afuera
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return item;
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      // fijate que para iterar la circular queue podria estar en cualquier estado
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const circularQueue = new CircularQueue(5);
console.log(circularQueue.isEmpty());
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);
circularQueue.print();
console.log(circularQueue.isFull());
console.log(circularQueue.dequeue())
console.log(circularQueue.peek())
circularQueue.print();
circularQueue.enqueue(60);
circularQueue.print();
