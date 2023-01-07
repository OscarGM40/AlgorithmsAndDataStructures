// problem statement(in the fibonacci sequence each number is the sum of the two preceding ones)
//  given a number 'n', find the first 'n' elements of the fibonacci sequence
// Tips for recursive solutions:
// 1- Figure out how to break down the problem into smaller versions of the same problem
// 2-Identify the base case for recursion <- es el caso para que pare

function recursiveFibonacci(n) {
  // base case rf0 es 0 y rf1 es 1
  if (n < 2) {
    return n;
  }
  // smaller version => rF de n es rf de n-1 + rf de n-2
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(6));
/* for (let i = 0; i < 6; i++) {
  console.log(recursiveFibonacci(i))
} */

// fijate que por cada entrada se llama dos veces(para f7 se llama a f6 y f5,para esas dos se llama 4,pues f6 llama a f5 y f4 y f5 llama a f4 y f3,es decir que para una entrada n se llama 2^n)