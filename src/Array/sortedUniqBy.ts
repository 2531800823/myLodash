import baseSortedUniq from "../utils/baseSortedUniq";
/** 排序好的数组去重, 参数2 迭代函数 */
function sortedUniqBy(arr: any[], iteratee: Function) {
  return arr != null && arr.length ? baseSortedUniq(arr, iteratee) : [];
}
export default sortedUniqBy;
