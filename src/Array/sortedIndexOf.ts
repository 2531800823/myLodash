import eq from "../Language/eq";
import baseSortedIndex from "../utils/baseSortedIndex";
/** 这个方法类似_.indexOf，除了它是在已经排序的数组array上执行二进制检索。
 */
function sortedIndexOf(arr: any[], value: any) {
  const len = arr.length ?? [];
  if (len) {
    const index = baseSortedIndex(arr, value);
    if (index < len && eq(arr[index], value)) return index;
  }
  return -1;
}
export default sortedIndexOf;
