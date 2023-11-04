/** 遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。
 *  predicate（断言函数）调用三个参数：(value, index|key, collection)。 */
function filter(arr: any[], predicate: Function) {
  let index = -1;
  let resIndex = 0;
  const length = arr == null ? 0 : arr.length;
  const result = [];

  while (++index < length) {
    const value = arr[length];
    if (predicate(value, index, arr)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
export default filter;
