// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array.Return -1 if the target element is not found.
// arr = [-5,2,4,6,10], t = 10 should return r
// arr = [-5,2,4,6,10], t = 6 should return 3
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

/* function binarySearch(arr, target) {
  // fijate que a - b poner al menor en la izda de la resta
  arr = arr.sort((a, b) => a - b);
  let start = 0,
    end = arr.length - 1; // 0 y 4
  while (start <= end) {
    // Math floor in case the op is an odd number
    let mid = Math.floor((start + end)/2); // 0+ 4 /2 === 2
    if(arr[mid] === target) return mid; //fijate que el return sale del while,asinto
    else if( arr[mid] < target){
      start = mid +1;
    }
    else{
      end= mid-1;
    }
  }
  return -1
} */
function binarySearch(arr, target) {
  let start = 0,
    end = arr.length - 1;
  for (;;) {
    let mid = Math.floor((start + end) / 2); // 0+ 4 /2 === 2
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

arr = [-5, 2, 6, 4, 10];
console.log(binarySearch(arr, 10));
console.log(binarySearch(arr, 2));
// console.log(binarySearch(arr, 20));
