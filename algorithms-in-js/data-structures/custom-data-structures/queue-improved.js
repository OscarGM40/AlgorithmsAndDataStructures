class Queue {
  constructor() {
    this.items = {};
      // necesitamos dos punteros más,al final y al principio
    this.rear = 0;
    this.front = 0;
  }
  // encolar al final
  enqueue(element){
   this.items[this.rear] = element 
   this.rear++;
  }
// desencolar al principio(shift).Fijate que vamos a devolver el item.Aqui está la clave de la performance,ya que accedemos directamente,sin iterar
  dequeue(){
    const item = this.items[this.front]; 
    delete this.items[this.front]
    this.front++;
    return item;
  }
  isEmpty(){
    // si los punteros apuntan a la misma posición esta vacio
    return this.rear - this.front === 0
  }
  
  peek(){
     return this.items[this.front] ;
  }

  size(){
    return this.rear - this.front;
  }
  print(){
    console.log(this.items)
  }
}

const queue = new Queue();
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size())
queue.print()
console.log(queue.dequeue())
console.log(queue.peek())
