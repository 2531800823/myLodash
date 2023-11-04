import basePullAll from "../utils/basePullAll";
/** 这个方法类似_.pull，区别是这个方法接收一个要移除值的数组。 */
function pullAll(arr: any[], ...values: any[]) {
  return arr != null && arr.length && values != null && values.length
    ? basePullAll(arr, values)
    : arr;
}
export default pullAll;
