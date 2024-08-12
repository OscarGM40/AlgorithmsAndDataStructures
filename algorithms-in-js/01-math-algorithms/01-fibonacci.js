/* Given a number 'n', find the first 'n' elements of the Fibonnacci sequence */
function getFibonacci(n) {
  const initialSequence = [0, 1];

  for (let i = 2; i < n; i++) {
    const length = initialSequence.length;
    const lastValue = initialSequence[length - 1];
    const penultimateValue = initialSequence[length - 2];
    initialSequence.push(lastValue + penultimateValue);
  }
  return initialSequence;
}

console.log(getFibonacci(10));

// Teacher's solution. Fijate que ya podia hacer fib[i] y entrar al indice 2 y ahorrarme todo el espacio en memoria que estoy gastando al guardar variables en cada iteración. Ambas soluciones entiendo que tienen complejidad temporal linear, por cada n +1 el bucle dará una vuelta más (complexity O(n))
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

/* incluso se puede hacer el push en vez de entrar por object[key] aunque da igual en terminos de performance 
function fibonacci(n){
  const fib=[0,1];
  for(let i=2; i<n; i++){
    fib.push(fib[i-1] + fib[i-2]);
  }
  return fib;
} */