// given a positive integer 'n',determine if the number is a power of two or not
// an integer is a power of two if there exists an integer 'x' such thant 'n'===x*x
// take in count that 1 is the potency of 2*0

const isPowerOfTwo = (n) => {
  // 1 es dos a la 0,luego es potencia de 2 tmb
  if (n === 1) return true;
  // mientras pueda dividirlo por 2 lo reasigno
  while (n % 2 === 0 && n > 2) {
    // la complexity es O(log n) por la siguiente linea,fijate que O(log n) es más costosa que una linear
    // al aumentar el valor de entrada el numero de instrucciones incrementa pero no en la misma cantidad
    n = n / 2;
  }
  return n === 2;
};
// LOGARITMO:el exponente al que hay que elevar un numero(llamado base) para obtener otro numero determinado(logaritmo en base 10 de 100 ) <- traduce en base como 'para' => logaritmo para 10 y que dé 100 tiene que ser 2.
// logaritmo para 3(en base 3) de 9 es 2 logaritmo en base 4 para 30 <- unos 7.25(logaritmo en base es igual que exponente para)
// otra forma for(let i =0;i<n;i++){if(n === 2**i){return false} return true} <- me gusta mucho(Math.pow en vez de ** tambien valdria).Si al iterar hasta n alguna la potencia de 2 de esa iteración es n lo cumple tmb.Bien visto

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(18));
console.log(isPowerOfTwo(21));

// HAy una solucion de complejidad O(1) constante
function isPowerOfTwoBitWise(n){
  if (n < 1) return false;
  return (n & (n-1)) === 0;
}

const calculatePowerOfTwo = (range) => {
  // return range.filter(isPowerOfTwo);
  return range.filter(isPowerOfTwoBitWise);
};

console.log(calculatePowerOfTwo(Array.from(Array(100).keys())));
