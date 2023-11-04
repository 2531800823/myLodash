import basePullAll from "../utils/basePullAll";
/** 这个方法类似于_.pullAll ，区别是这个方法接受一个 iteratee（迭代函数）
 * 调用 array 和 values的每个值以产生一个值，通过产生的值进行了比较。
 * iteratee 会传入一个参数： (value)。
 */
function pullAllBy(arr: any[], values: any[], iteratee?: Function) {
  return arr != null && arr.length && values != null && values.length
    ? basePullAll(arr, values, iteratee)
    : arr;
}
export default pullAllBy;
