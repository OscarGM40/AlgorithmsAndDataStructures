// Given an array of integers,sort the array
// const arr = [-6, 20, 8, -2, 4]; should return  [-6, -2, 4, 8, 20]
// bubble sort idea : compare adjacent elements in the array and swap positions

function bubbleSort(arr) {
  let elementsToSwap = true;

  while (elementsToSwap) {
    for (let i = 1; i < arr.length; ++i) {
      if (arr[i - 1] < arr[i]) {
        elementsToSwap = false;
      } else if (arr[i - 1] > arr[i]) {
        elementsToSwap = true;
        break;
      }
    }
    for (let i = 1; i < arr.length; ++i) {
      // si es mayor el primero el segundo va el primero y el primero el segundo
      if (arr[i - 1] > arr[i]) {
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

// teacher's solution
function teacherBubbleSort(arr) {
  let swapped;
  // el do-while siempre ejecuta una vez el código,y es algo que tenemos que hacer una vez al menos nosotros,luego es ideal
  do {
    // fijate que lo ponemos en false de primeras para que salga tras la 1a iteration si estuviera ya ordenado
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true; // si entramos al if ponemos la bandera en true para que lo vuelva a ejecutar,la solución es más eficiente que la mia,podia haber juntado todo en un bucle en vez de usar dos
      }
    }
  } while (swapped);
  return arr;
}

console.log(bubbleSort([-6, 20, 8, -2, 4]));
console.log(bubbleSort([-1, -5, 8, 2, 14, -3, 7, -10, 10, 11]));
console.log('Teacher solution')
// the cost is O(n^2) <- cuadratic (se incrementa en el cuadrado de la entrada) y la mia sería O(2n^2)(2n a la dos) ??
console.log(teacherBubbleSort([-6, 20, 8, -2, 4]));
console.log(teacherBubbleSort([-1, -5, 8, 2, 14, -3, 7, -10, 10, 11]));


