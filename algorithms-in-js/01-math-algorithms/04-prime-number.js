// given a natural number 'n', determine if the number is prime or not
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers,that is, that is only divisible by itself and 1 (since every number is divisible by 1)

function isPrimeNumber(numberGiven) {
  if (numberGiven < 2) {
    return false;
  }

  let isPrime = true;
  // de nuevo la complejidad temporal es O(n) linear
  for (let i = 2; i < numberGiven; i++) {
    if (numberGiven % i === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(10));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(43));
console.log(isPrimeNumber(42));

// Teacher's solution
function isPrime(n) {
  //fijate que esto vale no solo para el 1 y el 0 sino para cualquier negativo, era esto
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    //fijate que en cuanto sea divisible el operador modulo dara 0 como resto y sale del bucle, luego es eficiente
    if (n % i === 0) {
      return false;
    }
  }
  // de nuevo no necesitaba una variable, con retornar el boolean me valia
  return true;
}
