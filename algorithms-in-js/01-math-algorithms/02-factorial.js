// Given an integer 'n', find the factorial of that integer. The factorial of a non-negative integer is the product of all positive integers less than or equal to that number
function getFactorial(n){
  let result = 1; // given that factorial of zero is one, we have to start with 1 in case the user wants the factorial of zero
  for(let i = 1; i <= n; i++){
    result *= i; // same as result = result * i;
  }
 return result;
}

console.log(getFactorial(4));
console.log(getFactorial(6));
console.log(getFactorial(3));
console.log(getFactorial(8));

// Teacher's solution Again the Big O is linear, it will iterate 1 more time for each n + 1 as input of the algorithm
function factorial(n){
 let result = 1;
 // dado que un numero multiplicado por uno da como resultado el mismo numero me podia ahorrar la primera iteracion de i = 1
 for(let i = 2; i <= n; i++){
  result = result * i;
 }
 return result;
}

// logaritmo: exponente al que es necesario elevar una base para que resulte un número determinado. Esta base debe ser positiva y distinta de 1.Por ejemplo el logaritmo de 1000 en base 10 es 3. Fijate que siempre tendré el numero determinado y la base, y me falta el exponente. Por ejemplo el logaritmo de 27 en base 3 es 3 (3 * 3 * 3). Fijate que el logaritmo de 24 en base 12 no es 2, porque son elevaciones, no multiplicaciones y 12*12 es 144, aqui hay que mirar las propiedades de los logaritmos ya que no es resolvible de forma natural y da una expresión como resultado.