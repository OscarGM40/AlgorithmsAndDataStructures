//  PROBLEM ONE: you got a list of items,where every item has a value and a weight.You got a bag,that holds a maximum weight of X.Write a program that maximizes the value of the items you put into your bag whilst ensuring that you don't exceed the maximun weight

const items = [
  { id: "a", val: 10, w: 3 },
  { id: "b", val: 6, w: 8 },
  { id: "c", val: 3, w: 5 },
  { id: "d", val: 2, w: 1 },
];

function maximizeBag(items, weight) {
  const finalItems = [];
  const itemsByVal = items.sort((a, b) => b.val - a.val);
  if (itemsByVal[items.length - 1].w > weight) {
    return console.log("no cabe nada en la bolsa");
  }
  console.log(itemsByVal)
  let pesoTotal = 0;


  // console.log(itemsByWeight)
}

console.log(maximizeBag(items, 18));
