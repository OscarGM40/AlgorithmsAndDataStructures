// given two finite non-empty sets,find their Cartesian Product
//In mathematics,the Cartesian product of two sets A and B,denoted AxB, is the set of all ordered pairs(a,b) where a is in A and b is in B
// Example One
// const A = [1,2]
// const B = [3,4]
// AxB = [[1,3],[1,4],[2,3],[2,4]] es [A.1 | B.1],[A.2 | B.2]
// Example Two
// const C =  [1,2]
// const D = [3,4,5]
// CxD = [[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]]
// Concept: traverse each array and pair each element in the first array wich each element in the second array

const calculateCartesianProduct = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; ++i) {
    for (let k = 0; k < arr2.length; ++k) {
      result.push([arr1[i], arr2[k]]);
    }
  }
  return result;
};
const declarativeCartesianProduct = (arr1, arr2) => {
  const result = [];
  arr1.forEach((n) => arr2.forEach((k) => result.push([n, k])));
  return result;
};

// console.log(calculateCartesianProduct([1,2],[3,4]))
// console.log(calculateCartesianProduct([1,2],[3,4,5]))
console.log(declarativeCartesianProduct([1, 2], [3, 4, 5]));
// the cost obviously is O(m*n) <- el producto de ambos length
