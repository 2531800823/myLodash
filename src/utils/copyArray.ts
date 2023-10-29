/** 复制 数组 */
function copyArray<T>(source: T[], arr?: T[]): T[] {
  let index = -1;
  const length = source.length;

  arr || (arr = Array(length));
  while (++index < length) {
    arr[index] = source[index];
  }
  return arr;
}
export default copyArray;
