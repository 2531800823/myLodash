import baseSortedUniq from "../utils/baseSortedUniq";
/** 排序好的数组去重 这个方法类似_.uniq，除了它会优化排序好的数组。 */
function sortedUniq(arr: any[]) {
  return arr != null && arr.length ? baseSortedUniq(arr) : [];
}
export default sortedUniq;
