import baseWhile from "../utils/baseWhile";

/** 从array数组的最后一个元素开始提取元素，
 * 直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。 */
function takeRightWhile(arr: any[], predicate: Function) {
  return arr != null && arr.length
    ? baseWhile(arr, predicate, false, true)
    : [];
}
export default takeRightWhile;
