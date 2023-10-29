/** 链接两个数组，地址不变 */
function arrayPush<T>(arr: T[], values: T[]): T[] {
  let index = -1;
  const length = values.length;
  const offset = arr.length;

  while (++index < length) {
    arr[offset + index] = values[index];
  }
  return arr;
}
export default arrayPush;
