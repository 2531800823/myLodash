import toInteger from "../Language/toInteger";
import strictIndexOf from "../utils/strictIndexOf";
import baseFindIndex from "../utils/baseFindIndex";
import baseIsNaN from "../utils/baseIsNaN";
/** 这个方法类似_.indexOf ，区别是它是从右到左遍历array的元素 */
function lastIndexOf(arr: any[], value: any, fromIndex: number) {
  const len = arr.length ?? 0;
  if (!len) {
    return -1;
  }

  let index = len;

  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = index < 0 ? Math.max(len + index, 0) : Math.min(index, len - 1);
  }

  return value === value
    ? strictIndexOf(arr, value, index)
    : baseFindIndex(arr, baseIsNaN, index, true);
}
export default lastIndexOf;
