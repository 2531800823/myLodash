/** 用于数组的' forEach '的特殊版本。 */
function arrayEach(arr: any[], iteratee: Function) {
  let index = -1;
  const length = arr.length;

  while (++index < length) {
    if (iteratee(arr[index], index, arr) === false) {
      break;
    }
  }
  return arr;
}
export default arrayEach;
