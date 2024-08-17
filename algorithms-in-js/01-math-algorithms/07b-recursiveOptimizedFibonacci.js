// There is a way to significantly speed up the recursive Fibonacci so that is about as fast as O(n).If I use an array that is passed as parameter during the recursive routine it dramatically speeds it up.This won't work in every language but it works in Javascript as arrays are stored in a shared memory. This means it really only needs to run it on each value as many times as in a For loop.

 // o(n) : linear time 
function fibonacciOptimized(n, counter = 0, previousValue = 0, value = 0) {
	if (counter == 1) {
		value = 1;
		previousValue = 0;
	}
	//base case :
	if (counter == n) return value;

	return fibonacciOptimized(n, ++counter, value, previousValue + value);
}

// diria que la clave está aqui, usando arrays
function fibonacciWithArrays(num, arr = [0, 1]) {
  if (num < arr.length + 1) {
    return arr;
  }
  return fibonacciWithArrays(num, [...arr, arr[arr.lenght - 1] + arr[arr.length - 2]]);
}
