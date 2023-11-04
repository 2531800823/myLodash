import isSymbol from "../Language/isSymbol";
import baseSortedIndexBy from "./baseSortedIndexBy";
/** 用作数组的最大长度和索引的引用 */
export const MAX_ARRAY_LENGTH = 4294967295;
/** 用作数组的最大长度和索引的引用 / 2  */
export const HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

/** sortedIndex和sortedLastIndex的基本实现
 *对' array '执行二分查找以确定' value '所在的索引
 *应该插入到' array '中以保持其排序顺序。 */
function baseSortedIndex(arr: any[], value: any, retHighest?: boolean) {
  let low = 0;
  let high = arr.length ?? low;
  if (
    typeof value === "number" &&
    value === value &&
    high <= HALF_MAX_ARRAY_LENGTH
  ) {
    // 二分
    while (low < high) {
      const mid = (low + high) >>> 1;
      const computed = arr[mid];
      if (
        computed !== null &&
        !isSymbol(computed) &&
        (retHighest ? computed <= value : computed < value)
      ) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return high;
  }
  return baseSortedIndexBy(arr, value, (value) => value, retHighest);
}
export default baseSortedIndex;
