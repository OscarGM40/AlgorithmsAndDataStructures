// Given a positive integer 'n', determine if the number is a power of 2 or not.Take into account that 2 a la zero es 1, luego 1 es true, 2, 4,8,16,32,etc

function isPowerOfTwo(input) {
  // si me dan 132 tendria que dividirlo entre 2, me daria 66, despues entre 2,me daria 33, si no consigo llegar hasta 2 no es una potencia
  /*   if (input === 1 || input === 2) {
    return true;
  }
  let lastValue;
  while (input > 2) {
    input = input / 2;
    lastValue = input;
  }
  return lastValue === 2; */
  // esta forma parece la mejor, ya que tenemos que llegar hasta el 1
  if (n < 1) {
    return false;
  }
  // fijate que la complejidad es O(logn) ya que se el time se reduce a la mitad
  while (input % 2 === 0) {
    input = input / 2;
  }
  return input === 1;
}
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(6)); // false
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(10)); // false

// Solucion del profesor
function isPowerOf2(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

// ojo, en la vida real se puede sacar con logaritmos o bitwise operations y tener complejidad temporal constante
const isPowerOfTwo = (n) => Number.isInteger(Math.log2(n));
function isPowerOfTwoBitwise(n){
  if(n < 1){
    return false;
  }
  return (n & (n-1)) === 0;
}