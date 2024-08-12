// Fuentes: https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
// Fuentes: https://gist.github.com/robmathers/1830ce09695f759bf2c4df15c29dd22d
/** custom fn que agrupa un arreglo de objetos en base a varias keys
 * @param arr el arreglo de tipo T
 * @param keys arreglo de keys para agrupar
 */

const groupBySeveralKeys = <T>(arr: T[], keys: (keyof T)[]): { [key: string]: T[] } => {
  return arr.reduce((storage, item) => {
    const objKey = keys.map((key) => `${item[key]}`).join(":");
    if (storage[objKey]) {
      storage[objKey].push(item);
    } else {
      storage[objKey] = [item]; // <- fijate que tiene que ser un arreglo
    }
    return storage;
  }, {} as { [key: string]: T[] });
};

const groupByOneKey = <T>(arr: T[], key: string): { [key: string]: T[] } => {
  return arr.reduce((storage, item) => {
    if (storage[key]) {
      storage[key].push(item);
    } else {
      storage[key] = [item]; // <- fijate que tiene que ser un arreglo
    }
    return storage;
  }, {} as { [key: string]: T[] });
};
