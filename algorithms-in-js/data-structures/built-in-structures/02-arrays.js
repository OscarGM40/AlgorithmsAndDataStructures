// An array is a data structure that can hold a collection of values
// Arrays can contain a mix of different data types in JS.You can mix strings,booleans,numbers,...all in the same array
// Arrays are resizable.You don't have to declare the size of an array before creating it.
// Javascript arrays are zero-indexed and the insertion order is maintained.
// Arrays are iterables.

const arr = [1, 2, 3, "Vishno", true];
arr.push(4);
arr.unshift(0);
// console.log(arr[0]);
for (const item of arr) {
  console.log(item);
}
// recuerda que puedo eliminar un item al final del array con arr.pop() y al principio con arr.shift()
// map, filter,reducer,concat,slice and splice are very common too
// insert or remove from end is O(1) constant <- push y pop o simplemente usando el ultimo index,no tiene por que ser con push o pop
// insert or remove from beginning is O(n) linear <- unshift y shift
// accesing any position is O(1)
// searching is O(n)
// shift,unshift,concat,slice,splice - O(n) linear
// forEach/map/filter/reduce - also O(n) linear
