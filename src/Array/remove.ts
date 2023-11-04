import basePullAt from "../utils/basePullAt";
/** 移除数组中predicate（断言）返回为真值的所有元素，
 * 并返回移除元素组成的数组。predicate（断言） 会传入3个参数：
 * (value, index, array)。 */
function remove(arr: any[], predicate: Function) {
  const result = [];
  if (!(arr != null && arr.length)) {
    return result;
  }

  let index = -1;
  const indexes = [];
  const { length } = arr;
  while (++index < length) {
    const value = arr[index];
    if (predicate(value, index, arr)) {
      result.push(value);
      indexes.push(index);
    }
  }
  basePullAt(arr, indexes);
  return result;
}
export default remove;
