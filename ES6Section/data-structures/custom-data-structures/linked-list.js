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

  prepend(value) {
    const node = new Node(value);
    // al agregar un nodo al principio podriamos o bien ya tener algo en la lista o que estuviera vacia(si esta vacia el head tengo que moverlo,si no no)
    if (this.isEmpty()) {
      this.head = node; // recuerda que una LinkedList tiene un puntero estático apuntando al punto de entrada de la colección 
    } else {
      node.next=this.head;
      this.head=node;
    }
    // size wil increment regarding whether the list is empty or not
    this.size++; 
  }
  print(){
    // two ways of printing whether the list is empty or not
    if(this.isEmpty()){
      console.log('The list is empty')
    } else {
      // we have to traverse through the list from the first node to the last
      // usaremos un pointer que empiece en el head,despues se movera a current.next.Cuando current.next apunte a null será el último 
      let curr = this.head;
      let listValues = ""; //acumulador
      // while(curr is truthy ya que cuando sea null esto da false y para)
      while(curr){
       listValues += `${curr.value} `;
       curr = curr.next; 
      }
      console.log(listValues)
    }
  }
}

const list = new LinkedList();
console.log("¿List is empty?: ", list.isEmpty());
console.log("List size: ", list.getSize());
list.print()
list.prepend(10)
list.print()
list.prepend(20)
list.prepend(30)
list.print() // fijate que es 30 20 10 porque es un prepend
list.prepend(40) // 40 30 20 10 
list.print()