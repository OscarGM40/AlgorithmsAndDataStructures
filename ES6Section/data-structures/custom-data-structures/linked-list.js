class Node {
  constructor(value) {
    // propiedad para acceder al value,ojo,imprescindible
    this.value = value;
    // aparte del value necesitamos el puntero al siguiente nodo que en principio apunta a null
    this.next = null;
  }
}

// en una LinkedList siempre va a haber un puntero hacia el primer elemento(de otra forma no sabriamos entrar a la colección,sin saber quien es el primer Node)
// ese puntero se le suele llamar head y obviamente hasta que no haya un Node apunta a null
class LinkedList {
  constructor() {
    this.head = null; //puntero del node de entrada
    this.size = 0; // llevaremos un registro del size
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
  // O(1)
  prepend(value) {
    const node = new Node(value);
    // al agregar un nodo al principio podriamos o bien ya tener algo en la lista o que estuviera vacia(si esta vacia el head tengo que moverlo,si no no)
    if (this.isEmpty()) {
      this.head = node; // recuerda que una LinkedList tiene un puntero estático apuntando al punto de entrada de la colección
    } else {
      node.next = this.head;
      this.head = node;
    }
    // size wil increment regarding whether the list is empty or not
    this.size++;
  }
  // O(n) ya que tenemos un while.Sin embargo,creando un puntero al last element nos ahorrariamos ese bucle y cambiaria a O(1)
  append(value) {
    const node = new Node(value);
    // si fuera el primero el head debe apuntar a él
    if (this.isEmpty()) {
      this.head = node;
    } else {
      // fijate que solo podemos acceder al primer elemento en una linked list
      let prev = this.head;
      // avanzamos el puntero hasta que next sea null(que será el último elemento antes del actual).Ese elemento tiene que apuntar al current node y dejar de apuntar a null
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      // de nuevo necesitamos un pointer al head
      let prev = this.head;
      // si me dan indice 2 tengo que cambiar el 1 y el 2
      for (let i = 1; i < index; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    // console.log({ size: this.size });
    if (index < 0 || index >= this.size) return console.log("index out of bounds");

    if (this.size === 1) {
      this.size--;
      return (this.head = null);
    }

    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    prev.value = prev.next.value;
    prev.next = prev.next.next;
    this.size--;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return console.log("Linked List is empty.Nothing to remove");
    }
    // fijate que this.head es un object {value:any,next:any}
    // si solo hubiera un elemento tenemos this.head.value apuntando al value y this.head.next apuntando a null
    // si el puntero.value es igual sin haberlo movido solo puede ser en el primer indice
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return console.log(value);
    } else {
      // si no hay que ir moviendo el puntero,de nuevo asignamos una variable al puntero
      let prev = this.head;
      // mientras el puntero tenga un next y sea diferente del value avanzamos el puntero
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      // si sale del bucle o bien tenemos en prev.next todo el nodo o no lo ha encontrado.Si existe ese prev.next es que lo encontró.Si lo encontró:
      if (prev.next) {
        // el nodo a remover lo tenemos en el puntero.next
        const removedNode = prev.next;
        // el puntero de éste nodo ahora debe apuntar al que apuntaba el removed.next
        prev.next = removedNode.next;
        // desde luego está todo bien claro, xd
        this.size--;
        return console.log(value);
      }
      return null;
    }
  }
  searchValue(value) {
    if (this.isEmpty()) {
      return console.log("Linked List is empty.Nothing to search");
    }
    // de nuevo podria haber sólo un elemento y estar en this.head.value
    if (this.head.value === value) {
      return console.log("Value found at index: ", 0);
    } else {
      let counter = 1;
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
        counter++;
      }
      if (prev.next) {
        return console.log("Value found at index: ", counter);
      }
      return console.log("Value not found: ", -1);
    }
  }
  searchByAuthor(value) {
    if (this.isEmpty()) return -1;
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }
  reverseList(){
    if(this.isEmpty()){
      return console.log('Nothing to reverse');
    }
    // tengo 5{10} 10{20} 20{30} 30{null} y tiene que quedar 30{20} 20{10} 10{5} 5{null}
    // necesitaremos dos punteros(y encima uno es temporal,el del paso 1)
    let prev = null;
    let curr = this.head;

    // por cada nodo tenemos que realizar 4 pasos,recuerda
    while(curr){
      // 1 crear un puntero temporal apuntando a nodo siguiente al curr(a curr.next)
      let next = curr.next 
      // 2  hacer que el curr node(su next) apunte al revés(al previo) => curr.next = prev
      curr.next = prev;
      // 3  update prev to current(advance the previous pointer)
      prev = curr;
      // 4  advance curr pointer
      curr= next;
    }
    // *** recuerda que tengo que mover el head al último item(que estará en prev,ojo)
    this.head = prev;
  }

  print() {
    // two ways of printing whether the list is empty or not
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      // we have to traverse through the list from the first node to the last
      // usaremos un pointer que empiece en el head,despues se movera a current.next.Cuando current.next apunte a null será el último
      let curr = this.head;
      let listValues = ""; //acumulador
      // while(curr is truthy ya que cuando sea null esto da false y para)
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log("¿List is empty?: ", list.isEmpty());
console.log("List size: ", list.getSize());
list.print();
list.append(10);
list.print();
list.prepend(20);
list.append(30);
list.prepend(40);
list.insert(5, 2);
list.print(); // 40 20 5 10 30
list.insert(7, 3);
list.print(); // 40 20 5 7 10 30
list.removeFrom(4);
list.print(); // 40 20 5 10 30
list.removeFrom(3);
list.print(); // 40 20 10 30
list.removeFrom(0);
list.print(); // 20 10
list.removeFrom(0);
list.print(); // 10 30
list.removeFrom(0);
list.print(); // 30
list.removeFrom(0);
list.print(); // null
list.append(10);
list.append(20);
list.prepend(5);
list.print(); // 5 10 20
list.removeValue(20); // eliminará el último
list.removeValue(50); // it should return null
list.append(20);
list.append(30); // 
list.print(); // 5 10 20 30
list.searchValue(30);
list.searchValue(60);
list.searchValue(10);
list.reverseList();
list.print(); // 30 20 10 5

const findSum = (arr, sum) =>
  arr.some(
    (
      (set) => (n) =>
        set.has(n) || !set.add(sum - n)
    )(new Set()),
  );
