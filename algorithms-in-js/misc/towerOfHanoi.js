// the objective of the puzzle is to move the entire stack to the last rod,obeying the following rules
// only one disk can be moved at them time
// each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod
// lastly,no disk can be placed on top of a disk that is smaller
// HINTS:
//  shift 'n-1' disks from 'A' to 'B',but using 'C'(when required)
//  shift last disk from 'A' to 'C'
// shift 'n-1' disks from 'B' to 'C',using 'A' (when required)

// n es el numero de discos
function towerOfHanoi(n,fromRod,toRod,usingRod){
  // case base
  if(n === 1){
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
    return;
  } 

  towerOfHanoi(n-1,fromRod,usingRod,toRod)
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n-1,usingRod,toRod,fromRod)
}
// para calcular el the time complexity podemos contar los console.log(para 2 rods son 3 y para 3 son 7).Mas o menos es O(2^n) 

towerOfHanoi(3,'A','C','B');