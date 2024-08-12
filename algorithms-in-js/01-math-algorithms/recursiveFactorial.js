// given an integer 'n',find the factorial of that integer
// a factorial onf a non-negative number is the product of all positive integers less than or equal to n
// factorial of zero is 1
function recursiveFactorial(n){
  if(n === 0)return 1;
  // fact 6 = 6*5*4*3*2*1
  // fact 5 = 5*4*3*2*1
  return recursiveFactorial(n-1)*(n)
}

console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(5))
console.log(recursiveFactorial(6))

// cost O(n) => para 5! llamaré a 5*4! que llamará a 4*3! que llamará a 3*2! que llamará a 2*1! que llamará a 1*0! que llama al return 1 y sale,es decir para una entrada n se llama n veces,luego es un coste linear