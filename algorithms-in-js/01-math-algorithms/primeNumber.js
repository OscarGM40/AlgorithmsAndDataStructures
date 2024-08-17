// given a natural number 'n', determine if the number is prime or not
// a prime number is a natural number greater than 1 that is not a product of two smaller natural numbers
// NOTA: integers larger than the square root do not need to be checked since if n=a*b,one of the two factos(a or b) is less than or equal to the square root of n
// no necesito comprobar los enteros mayores a su raiz cuadrada,porque si x*y=z o x o y es menor que la raiz cuadrada de z.Por ejemplo tomando n = 24, a=4 y b=6, la square root de 24 es 4.89, se puede ver que a(o 4) es menor que la raiz cuadrada de n (if n=a*b a or b are gonna be lesser than squareroot of n)
// 35=5*7 <- raiz cuadrada de 35 es 5.91

// con todo esto podemos cambiar el for(let i = 2; i < n; i++)  a for(let i = 2; i <= Math.sqrt(n), i++) cambiando a complejidad linear O(sqrt(n))

const isPrime = n => {
  if(n < 2) return false;
  // for(let i = 2;i < n;i++){
  // si bien podemos iterar desde 2 hasta el numero inmediato anterior al dado podemos escaquearnos de muchas iteraciones con la regla anterior(SQRT)
  for(let i = 2;i <= Math.sqrt(n);i++){
    // time complexity is O( sqrt(n) ) <-  
    if(n % i === 0){
      return false
    }
  }
  return true;
}

console.log(isPrime(1))

const extractPrimes = range => {
  return range.filter(isPrime);
}

console.log(extractPrimes(Array.from(Array(100).keys())))