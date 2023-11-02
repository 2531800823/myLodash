import toInteger from "../Language/toInteger";
import baseFindIndex from "../utils/baseFindIndex";
/** 这个方式类似_.findIndex， 区别是它是从右到左的迭代集合array中的元素。 */
function findLastIndex(arr: any[], predicate: Function, fromIndex: number) {
  const length = arr.length ?? 0;
  if (!length) {
    return -1;
  }

  let index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index =
      fromIndex < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1);
  }

  return baseFindIndex(arr, predicate, index, true);
}
export default findLastIndex;
