// given an integer 'n',find the factorial of that integer
// a factorial onf a non-negative number is the product of all positive integers(so I discard the zero) less than or equal to n
// factorial of zero is 1
const calculateFactorial = (n) => {
  // recuerda ser descriptivo con el naming
  let result = 1;
  // de nuevo el coste del algoritmo es O(n) linear time complexity
  // fijate que puedo obviar la multiplicación por 1 (i>1) ya n*1 es n
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
};
console.log(calculateFactorial(0));
console.log(calculateFactorial(5));
