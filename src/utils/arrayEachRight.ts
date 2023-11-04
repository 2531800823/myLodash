/** 用于数组的' forEachRight '的特殊版本。 */
function arrayEachRight(arr: any[], iteratee: Function) {
  let length = arr.length ?? 0;

  while (length--) {
    if (iteratee(arr[length], length, arr) === false) {
      break;
    }
  }
  return arr;
}
export default arrayEachRight;
