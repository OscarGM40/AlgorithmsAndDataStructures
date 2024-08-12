// Given an array of integers, sort the array
// const arr = [-6, 20, 8, -2, 4]; should return  [-6, -2, 4, 8, 20]
// concept: Begin identifing the pivot element in the array(aqui hay varias opciones):
// pick first element as pivot
// pick last element as pivot(our approach)
// pick random element as pivot
// pick median element as pivot
// put everything smaller than the pivot into a left array and everythin greater into a right array
// repetir por cada array left and right hasta que tenga un array de longitud 1 que estará ordenado por definicion(ya que es un elemento)
// concatenar repetidamente el array left,el pivot y el right hasta que quede solo uno ordenado
// [-6, 20, 8, -2, 4] el pivot es 4, me saldrá left [-6,-2] y right [8,20]
// para el [-6,-2] cojo el pivot que es -2 y me sale un left con [-6] y un right empty
// similarly para el [8,20] cojo el pivot que es [20] y me sale un left con [8] y un pivot con [20] y otro right empty
// concateno por nivel ([-6,-2] como left + [8,20] como right)Al subir un nivel me queda [-6,-2] + [4] + [8,20].

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  // primero cogemos el pivot
  let pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  // iteramos el array y vamos pasando los valores a izda o dcha
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else if (arr[i] > pivot) {
      rightArr.push(arr[i]);
    }
  }
  // la clave estaba en el return,es aqui donde iba la recursion.
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

/* worst case complexity is O(n^2 ) <- se da cuando el array ya estaba ordenado.Esto es muy unlikely.Un array que ya estaba ordenado no tiene sentido volver a ordenarlo,por ello para el quickSort se tiene en cuenta la avg case complexity(que lo hace mejor) */
/* however the average case complexity is O(n log n) O n * logaritmo de n */

/* fijate que desde la traduccion casi estaba ya claro,pues debe retornar la llamada al mismo,solo que con otro input */
const arr = [8, 20, -2, -4, -6];
console.log(quickSort(arr))