// given a staircase of 'n' steps, count the number of distinct ways to climb to the top.You can either climb 1 step or 2 steps at time.
// n1, climbingStaircase(1) 1  => there is only one way to climb it (1) (steps)
// n2, climbingStaircase(2) 2  => there are two ways (1,1) and (2) (steps)
// n3, climbingStaircase(3) 3  => there are three ways (1,1,1) (2,1) and (1,2) (steps)
// n4, climbingStaircase(4) 5  => there are five ways (1,1,1,1,1) (2,1,1) (1,2,1) (1,1,2) and(2,2) (steps)
// concept: at any given time,you can climb either 1 step or 2 steps
// so if you have to climb to step 'n', you can only climb from step 'n-1' or 'n-2'
// so calculate the ways we can climb to 'n-1' and 'n-2' steps and add the two
// climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)

const climbingStaircase = (n) => {
  // fijate que el caso base es este(porqué,pues a saber,asinto)
  const noOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
};
// dado que sólo tengo un for loop el time complexity es O(n) linear

const recursiveClimbingStaircase = (n) => {
  // fijate que el caso base cambia un poco de fibonacci que es n === 0 ó n === 1
  if(n <= 2) return n;
  return recursiveClimbingStaircase(n-1) + recursiveClimbingStaircase(n-2)
}
// aqui la complexity sería O(2^n) (cuadrática), empeorando la linear al usar un loop.Si bien el espacio en memoria es menor,es imperceptible, por cada n se va a llamar 2n.No es una solución válida

// console.log(climbingStaircase(4));
// console.log(climbingStaircase(5));
console.log(recursiveClimbingStaircase(4));
