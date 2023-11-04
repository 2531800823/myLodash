import baseUniq from "../utils/baseUniq";
/** 这个方法类似_.uniq ，除了它接受一个 iteratee （迭代函数），
 * 调用每一个数组（array）的每个元素以产生唯一性计算的标准
 * iteratee 调用时会传入一个参数：(value)。 */
function uniqBy(arr: any[], iteratee: Function) {
  return arr != null && arr.length ? baseUniq(arr, iteratee) : [];
}
export default uniqBy;
