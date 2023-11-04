import basePullAll from "../utils/basePullAll";

/** 这个方法类似于_.pullAll，区别是这个方法接受 comparator 调用array中的元素和values比较。
 * comparator 会传入两个参数：(arrVal, othVal)。 */
function pullAllWith(arr: any[], values: any[], comparator?: Function) {
  return arr != null && arr.length && values != null && values.length
    ? basePullAll(arr, values, undefined, comparator)
    : arr;
}
export default pullAllWith;
