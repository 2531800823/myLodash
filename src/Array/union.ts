import baseUniq from "../utils/baseUniq";
import baseFlatten from "../utils/baseFlatten";
import isArrayLikeObject from "../Language/isArrayLikeObject";
/** 创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较。
 * （注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的） */
function union(...arrs: any[][]) {
  return baseUniq(baseFlatten(arrs, 1, isArrayLikeObject, true));
}
export default union;
