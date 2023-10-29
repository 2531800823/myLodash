/**创建一个新数组，包含原数组中所有的非假值元素。
 * 例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。 */
function compact<T>(arr: T[]): T[] {
  let resIndex = 0;
  const result: T[] = [];

  if (arr == null) {
    return result;
  }

  for (const value of arr) {
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

export default compact;
