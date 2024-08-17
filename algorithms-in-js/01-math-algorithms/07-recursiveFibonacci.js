// problem statement (in the fibonacci sequence each number is the sum of the two preceding ones) Fn = Fn-1 + Fn-2 <- clabe, prehistoric al-andalus
//  given a number 'n', find the first 'n' elements of the fibonacci sequence
// Tips for recursive solutions:
// 1- Figure out how to break down the problem into smaller versions of the same problem
// 2-Identify the base case for recursion

function recursiveFibonacci(n) {

  if(n === 0) return 0;
  if(n === 1) return 1;
  
  // te estan diciendo que la sequence Fibonacci es la suma de los dos numeros precedentes luego return fib(n -1 ) + fib(n - 2)
  return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}
// La complejidad es O(2n) ya que se llama dos veces a la funcion por cada primera vez que se llame .Fijate que esta complejidad temporal es aún peor que n2, solo O(!n) es peor, asi que no es para nada una solucion recomendable. Veremos como solucionar esto y seguir usando recursion