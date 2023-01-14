
// para crear un Map tenemos la clase Map,que acepta un array como argumento,sin embargo,ese array tiene que tener subarrays de 2 elementos: [ [k,v], [k,v] ]
const map  = new Map([ ['pais',"Venezuela"], ['edad',25], ['nombre',"pedro"] ]);
for(const [k,v] of map){
  console.log(`${k}: ${v}`)
}
// para añadir un nuevo valor tengo el metodo map.set(k,v) que obviamente pide dos argumentos(la clave la pide como string)
map.set('d',4);
// si quiero comproba si una KEY existe tengo el método has:
console.log(map.has('b'))
// si quiero borrar un par de clave valor tengo el método delete(key) que borrará la pareja mediante la key
map.delete('a')
// de nuevo puedo ver su numero de elementos con la propiedad size
console.log(map.size)
// de nuevo puedo vaciar el Map con el método clear()
map.clear()