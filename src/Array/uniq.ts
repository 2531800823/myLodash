import baseUniq from "../utils/baseUniq";
/** 创建一个去重后的array数组副本。使用了SameValueZero 做等值比较。
 * 只有第一次出现的元素才会被保留 */
function uniq(arr: any[]) {
  return arr != null && arr.length ? baseUniq(arr) : [];
}
export default uniq;
