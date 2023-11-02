import toInteger from "../Language/toInteger";
import baseIndexOf from "../utils/baseIndexOf";
/** 使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值，
 * 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。 */
function indexOf(arr: any[], value: any, fromIndex: number) {
  const len = arr.length ?? 0;
  if (!len) {
    return -1;
  }

  let index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = Math.max(len + index, 0);
  }

  return baseIndexOf(arr, value, index);
}
export default indexOf;
