const obj = {
  name: "Bruce",
  age: 25,
  "key-three": true,
};
obj.hobby = "football"

console.log(obj["age"]);
console.log(obj["key-three"]);
console.log(obj)

console.log('accediendo a las keys')
console.log(Object.keys(obj))
