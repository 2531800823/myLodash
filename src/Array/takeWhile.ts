import baseWhile from "../utils/baseWhile";
/** 从array数组的起始元素开始提取元素，
 * 直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。 */
function takeWhile(arr: any[], predicate: Function) {
  return arr != null && arr.length ? baseWhile(arr, predicate) : [];
}
export default takeWhile;
