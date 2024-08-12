
// para crear un set tengo la clase Set(iterable) que permite crear un Set desde un iterable
const set = new Set([1,2,3])
// para añadir a un Set tengo el método set.add()
set.add(4)
// un Set va a ignorar valores duplicados
set.add(4)
// puedo comprobar si un Set tiene un determinado valor con Set.has(value) <- dado que iterará será O(n)
set.has(2)
set.forEach(i => console.log(i))

// para borrar tengo el método delete
set.delete(3)
// para contar el numero de elementos tengo la propiedad size,igual que length para arrays.Es una propiedad
console.log(set.size)
// para vaciar un Set tengo el método clear:
set.clear()
console.log(set.size)