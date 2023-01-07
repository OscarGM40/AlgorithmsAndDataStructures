// Given an array of 'n' elements and a target element 't',find the index of 't' in the array.Return -1 if the target element is not found
// arr = [-5,2,10,4,6], t = 10 should return 2
// arr = [-5,2,10,4,6], t = 6 should return 4

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

// es O(n) porque podria iterar por todo el array perfectamente
arr = [-5,2,10,4,6];
console.log(linearSearch(arr,10))
console.log(linearSearch(arr,6))
console.log(linearSearch(arr,20))

