// Given an array of integers,sort the array
// const arr = [-6, 20, 8, -2, 4]; should return  [-6, -2, 4, 8, 20]
// este algoritmo compara un elemento con todos los de la izquierda,hasta que encuentra un elemento que es más pequeño que él,y si es asi se pone a su derecha
// insert sort idea: virtually split the array into a sorted and a unsorted part
// Assume that the first element is alreadly sorted and remaining elements are unsorted
// Select an unsorted element and compare with all elements in the sorted part
// If the elements in the sorted part is smaller than the selected element,proceed to the next element in the unsorted part.Else,shift larger elements in the sorted part towards the right.
// Insert the selected element at the right index
// Repeat till all the unsorted elements are placed in the right order
// partiendo del array [-6, 20, 8, -2, 4] debo asumir que el -6 esta ordenado y va al array sorted.Despues cogo el 20 y si el sorted(-6) no es mayor que ese 20 pongo el 20 a la derecha de -6

function insertionSort(arr) {
  // dado que el primer elemento se supone ordenado iteramos desde la posicion 1 y no la 0
  for (let i = 1; i < arr.length; i++) {
    //  el numero a comprobar debe ser almacenado en una variable
    let nti = arr[i];
    let j;
    // el indice inicial del array de sorted va a ser siempre una posicion menos que i (luego j = i -1)
    // además j debe ser mayor que 0 y arr[j] debe ser mayor que nti(j >= 0 && arr[j] > nti) <- fijate que el for loop sabrá el valor
    for (j = i - 1; j >= 0 && arr[j] > nti; j--) {
      // si se cumple todo,duplico ese elemento(es decir,lo llevo una posicion a la derecha,pues en la suya ira el numero inmediato menor)
      arr[j + 1] = arr[j];
    }
    // si no se movieron las posiciones es que era mayor que todos y lo meto en la posicion siguiente a la que quedó j
    arr[j + 1] = nti;
  }
  return arr;
}

function teacherInsertionSort(arr) {
  // dado que el primer elemento se supone ordenado iteramos desde la posicion 1 y no la 0
  for (let i = 1; i < arr.length; i++) {
    //  el numero a comprobar debe ser almacenado en una variable
    let nti = arr[i];
    //  este numero debe ser comparado con cada elemento de la parte ordenada,siendo su primer indice i-1(es decir el 0)
    let j = i - 1;
    //  este bucle asegura que todos los elementos mayores que el que se esta comprobando se mueven una posicion a la derecha
    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j];
      // ojo que el bucle va hacia atras
      j = j - 1;
    }
    //  el while mueve las posiciones,pero esta sentencia no es condicional,siempre se añade nti a la ultima posicion
    arr[j+1] = nti;
  }
  return arr;
}

function otherInsertionSort(arr) {
  // itero desde la posicion 1 pues la 0 se asume ordenada
  for (let i = 1; i < arr.length; i++) {
    let nti = arr[i];
    let j = i - 1;
    // si hay posiciones a iterar y el valor es mayor tengo que moverlo a la derecha
    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j];
      j = j - 1; //ojo que el bucle va hacia atras y no hacia delante
    }
    // tras mover las posiciones del array de sorted añadimos si o si el nti(esto es independiente,es obligatorio)
    arr[j + 1] = nti;
  }
  return arr;
}

function loggedInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let previousIndex = i - 1;

    console.log(`
> enters for loop
Current array: ${arr}
NTI: ${numberToInsert} at position ${i}, 
Previous Element: ${arr[previousIndex]} at position ${previousIndex}`);

    while (arr[previousIndex] > numberToInsert) {
      arr[previousIndex + 1] = arr[previousIndex];

      console.log(`
            >> enters while loop: 
            Copy ${arr[previousIndex]} to position ${previousIndex + 1}
            Temporary array : ${arr}
            Temporary Previous Element: ${arr[previousIndex]} at position ${previousIndex}`);

      // updates previousIndex only inside the while loop (and prevents infinite loop)
      previousIndex = previousIndex - 1;
      console.log(`
            If ${numberToInsert} is greater than ${arr[previousIndex]} at position ${previousIndex}, exit while loop`);
    }

    arr[previousIndex + 1] = numberToInsert;

    console.log(
      `
        Inserts number ${numberToInsert} at position ${[previousIndex + 1]} 
        NEW loop array: `,
      arr,
    );
  }
}

function otherInsertionSort(arr) {
  // itero desde la posicion 1 pues la 0 se asume ordenada
  for (let i = 1; i < arr.length; i++) {
    let nti = arr[i];
    let j = i - 1;
    // si hay posiciones a iterar y el valor es mayor tengo que moverlo a la derecha
    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j];
      j = j - 1; //ojo que el bucle va hacia atras y no hacia delante
    }
    // tras mover las posiciones del array de sorted añadimos si o si el nti(esto es independiente,es obligatorio)
    arr[j + 1] = nti;
  }
  return arr;
}
console.log(teacherInsertionSort([2, 1, 3, 7, 5])); // [1, 2, 3, 5, 7]
console.log(teacherInsertionSort([5, 2, 4, 6, 1, 3]));
// console.log(insertionSort([-1, -5, 8, 2, 14, -3, 7, -10, 10, 11]));
