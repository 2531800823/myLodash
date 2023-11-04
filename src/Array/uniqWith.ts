import baseUniq from "../utils/baseUniq";
/** 这个方法类似_.uniq， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。
 * comparator 调用时会传入2个参数： (arrVal, othVal)。 */
function uniqWith(arr: any[], comparator?: Function) {
  comparator = typeof comparator === "function" ? comparator : undefined;
  return arr != null && arr.length ? baseUniq(arr, undefined, comparator) : [];
}
export default uniqWith;
