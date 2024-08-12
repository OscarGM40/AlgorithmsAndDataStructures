// hay varias formas de limpiar arrays(de objetos) basandonos en una propiedad cualquiera de ese objeto.Imaginemos un arreglo de entries a Tweet:
const tweets = [
  { tweet: { id: "101", author: { id: "1", name: "Michael" } } },
  { tweet: { id: "102", author: { id: "2", name: "Petra" } } },
  { tweet: { id: "103", author: { id: "1", name: "Michael" } } },
  { tweet: { id: "104", author: { id: "3", name: "Buster" } } },
  { tweet: { id: "105", author: { id: "2", name: "Petra" } } },
];
// nuestra meta es obtener el siguente arreglo para poder iterarlo y acceder a los authors
const idealOutcome = [
  { tweet: { id: "101", author: { id: "1", name: "Michael" } } },
  { tweet: { id: "102", author: { id: "2", name: "Petra" } } },
  { tweet: { id: "104", author: { id: "3", name: "Buster" } } },
];
// Fijate que al final lo que queremos es que la propiedad author.id no pueda estar duplicada en el arreglo.Hay varias formas de realizar esto

// *** TECHNIQUE 1 - USING REDUCE METHOD ***
// Podemos usar Array.reduce para iterar el array y ver si ya teniamos un objeto en el accumulator con la misma property.Fijate que accumulator será un array
const uniqueAuthorsReduced = tweets.reduce((accumulator, current) => {
  // fijate que item es el Object luego es item.tweet.author.id
  if (!accumulator.find((item) => item.tweet.author.id === current.tweet.author.id)) {
    accumulator.push(current);
  }
  return accumulator;
}, []);

console.group("usingReduce", uniqueAuthorsReduced);
// NOTA: diria que el coste es O(n^2) cuadrático

// *** TECHNIQUE 2 - USING MAP CLASS and Array.map METHOD ***
// Usar un Map mejora la performance y toma menos lineas de código,pero no preserva el orden del original y es menos legible(el orden es importante,asinto)
const uniqueAuthorsMap = [...new Map(tweets.map((t) => [t.tweet.author.id, t])).values()];
// console.log("using Map Class",uniqueAuthorsMap.map(u => u.tweet.author.id))
console.group("using Map Class", uniqueAuthorsMap);
// even though is more performant unordering the array could be determinant

// *** TECHNIQUE 3 - USING lodash.uniqueWith() ***
// If you are already using Lodash,uniqueWith() function might be a suitable and fast solution for you:
/* import _ from "lodash"
const uniqueAuthorsUniqueWith = _.uniqWith(tweets,(arrVal,othVal) => arrVal.tweet.author.id === othVal.tweet.author.id)
console.log("using lodash uniqWith",uniqueAuthorsUniqueWith) */

// *** TECHNIQUE 4 - USING Filter + Set() ***
// Otra forma es usar un Set y sus métodos Set.has(item) y Set.add(item) en el filter.
const seen = new Set();
const uniqueAuthorsFilteredWithSet = tweets.filter((item) => {
  const duplicate = seen.has(item.tweet.author.id);
  seen.add(item.tweet.author.id); //realmente usamos el Set como backup,para que el seen.has esté correcto
  return !duplicate;
});
// si bien es una forma muy legible,deja un Set por ahi y también parece cuadrática.No desordena,lo que la hace valida
console.log("using Array.filter + Set Class", uniqueAuthorsFilteredWithSet);

// *** TECHNIQUE 5 - USING Filter + findIndex ***
// Muy similar al approach 4,pero usando findIndex en vez de un Set.Fijate que el primer filter tiene que retornar true o false luego:
const uniqueAuthorsFilteredWithFindIndex = tweets.filter((item, index, self) => {
  // solo queremos los true
  return index === self.findIndex((value) => value.tweet.author.id === item.tweet.author.id);
});
// se puede hacer sin el return tmb,asinto
const uniqueAuthors = tweets.filter(
  (value, index, self) =>
    index === self.findIndex((t) => t.tweet.author.id === value.tweet.author.id),
);
console.log("using Array.filter + self.findIndex", uniqueAuthorsFilteredWithFindIndex);
console.log("using Array.filter + self.findIndex + implicit return", uniqueAuthors);
// el reduce me parece muy legible,y la del self tmb
