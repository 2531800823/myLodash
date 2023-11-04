import baseSortedIndex from "../utils/baseSortedIndex";
/** 此方法类似于_.sortedIndex，除了 它返回 value值 在 array 中尽可能大的索引位置（index） */
function sortedLastIndex(arr: any[], value: any) {
  return baseSortedIndex(arr, value, true);
}
export default sortedLastIndex;
