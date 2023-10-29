/** 使用 while 实现的 map */
function map<T>(
  array: T[],
  iteratee: (item: T, index: number, arr: T[]) => T[]
) {
  let index = -1;
  const length = array == null ? 0 : array.length;
  const result = new Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
export default map;
