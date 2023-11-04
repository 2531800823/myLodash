import baseSortedIndex from "../utils/baseSortedIndex";
/** 使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置
 * ，以保证array的排序 */
function sortedIndex(arr: any[], value: any) {
  return baseSortedIndex(arr, value);
}
export default sortedIndex;
