// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array.Return -1 if the target element is not found.
// arr = [-5,2,4,6,10], t = 10 should return 4
// arr = [-5,2,4,6,10], t = 6 should return 3
// arr = [-5,2,4,6,10], t = 20 should return -1

function recursiveBinarySearch(arr, left, right, target) {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      return recursiveBinarySearch(arr, mid + 1, right, target);
    }
    return recursiveBinarySearch(arr, left, mid - 1, target);
  }
  //base case
  return -1;
}

arr = [-5, 2, 6, 4, 10];
console.log(recursiveBinarySearch(arr, 0, arr.length - 1, 10));
console.log(recursiveBinarySearch(arr, 0, arr.length - 1, 2));
console.log(recursiveBinarySearch(arr, 0, arr.length - 1, 20));

// Fijate que nada me impide cambiar el numero de argumentos para meter la recursividad.De echo sin hacerlo no podria refactorizar binarySearch.
// Fijate también que lo cambiante es lo parametrizado
// La time complexity sigue siendo O(log n)