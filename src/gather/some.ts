/** 数组方法 some while 实现 */
function some(arr: any[], predicate: Function) {
  let index = -1;
  const length = arr.length ?? 0;
  while (++index < length) {
    if (predicate(arr[index], index, arr)) {
      return true;
    }
  }
  return false;
}
export default some;
