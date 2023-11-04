import eq from "../Language/eq";
import baseSortedIndex from "../utils/baseSortedIndex";
/** 这个方法类似_.lastIndexOf，除了它是在已经排序的数组array上执行二进制检索。 */
function sortedLastIndexOf(arr: any[], value: any) {
  const len = arr.length ?? 0;
  if (len) {
    const index = baseSortedIndex(arr, value, true) - 1;
    if (eq(arr[index], value)) {
      return index;
    }
  }
  return -1;
}
export default sortedLastIndexOf;
