/* given an array of integers,sort the array
   first I must divide the array into subarrays, each containing only one element(remember that an array with one element is sorted by definition)
   repeteadly merge the sub-arrays to produce new sorted sub-arrays until there is only one sub array remaining.That will be the sorted array
   Step One = [-6,20,8,-2,-4]
   Step Two = [-6,20] y [8,-2,-4]
   Step Three => comprobar que son arrays de 1 elemento
   Step four => [-6] y [20] y [8] y [-2,4] <- le faltaría éste aún
   Step five => los voy uniendo asegurandome que están ordenados:
         [-6] [20] [8] [-2] [4] pasaría a 
         [-6,20] y [8] y [-2,-4] pasaría a
         [-6,20] y [-2,-4,8] pasaria a ** aqui hay truco **
         [-6,-2,4,8,20] 

  MERGE STRATEGY
  Para unir dos subarrays hay que crear un array temporal:
  [-6] [20] => [] 
  left & right are not empty YES
  Comparo el primer elemento de cada subarray y pongo el menor en el tempArray
  [] [20] => [-6]
  Si el left es empty pusheo el rith al temp => [-6,20]
  Cuando el left y el right estén vacios tengo en el temp el subarray sorted
  [] [] => [-6, 20]
  Veamos lo mismo para dos subarrays más grandes
  [-6,20] vs [-2,4,8]
  el menor es -6
  [20] vs [-2,4,8] => [-6]
  left & right are not empty YES <- repetir 
  [20] vs [-2,4,8] <- -2 es menor que 20 luego le puseo al tempArr => [-6,-2]
  [20] vs [4,8] 4 es menor que 20 luego le pusheo [-6,-2,4] 
  [20] vs [8] => [-6,-2,4,8]
  Seguir hasta que los dos esten vacios.NOTA:cuando el rightArr(uno de los dos) este empy el left va automaticamente:
  [20] vs [] => [-6,-2,4,8,20]
  [] vs [] => retornar el temp pues ya está ordenado

  This is a recursive algorithm, which dramatically improves the efficiency of our sort compared to bubble or insertion sort. The worst case scenario for our list is O(n log(n)), that is, we must go through every item at least once, hence the first n, but with each recursive call we operate on half the data set. This means that when we double n, we only get one more operation, instead of n number of operations like in bubble or insertion sort.
  
*/

const mergeSort = (arr) => {
  // base case dividir el array hasta que su longitud sea uno
  if (arr.length < 2) {
    return arr;
  }
  // dividir el array en two halves(left and right)
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  // AQUI VIENE EL PRIMER TIP: debo usar más de una función,ya que las subdivisiones llevan recursion
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  // console.log({leftArr})
  // console.log({rightArr})
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      // puedo usar shift => sortedArr.push(leftArr.shift()) o mutar el array con splice(memoriza que splice tiene repercusión mientras que slice no,memoriza la p de permanente,lo que haga con splice es permanente)
      // TIP: usar shift o el splice no aumenta complejidad dado que todos los elementos tienen que ser reindexados
      sortedArr.push(leftArr[0]);
      leftArr.splice(0,1);
      // slice no muta,pero no me deja reasignarlo
    } else {
      sortedArr.push(rightArr[0]);
      rightArr.splice(0,1);
    }
  }
  // el orden es asi sorted - left -right
  return [...sortedArr, ...leftArr, ...rightArr];
};

const arr = [-6, 20, -2, -4, 8];
console.log(mergeSort(arr));

// fijate que he tenido que dividir el algoritmo primeramente en dos funciones(esto es log n) y que además en la segunda uso un bucle while luego el total es O(n*log n) <- siendo aun mas eficiente que el bubbleSort o el insertSort.De echo n*logn es una de las mejores time complexity al ordenar,pues aunque iteramos n veces minimo por cada entrada nueva iteraremos solo en medio set y no en todo
