// problem statement(in the fibonacci sequence each number is the sum of the two preceding ones)
//  given a number 'n', find the first 'n' elements of the fibonacci sequence

const calculateFibonacci = (n) => {
  const aux = [];

  let initialValue = 0;
  let currentValue = 1;
  let nextValue;
// fijate que con el array de base es un poco más eficiente
  for (let i = 0; i < n; i++) {
    aux.push(initialValue);
    nextValue = currentValue + initialValue;
    initialValue = currentValue;
    currentValue = nextValue;
  }
  return aux;
};
console.log(calculateFibonacci(9));

// Resolución
function fibonacci(n) {
  const fib = [0, 1];
  // coste O(n) linear <- no dar más vueltas
  for (let i = 2; i < n; i++) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  console.log(fib);
}
fibonacci(9);
