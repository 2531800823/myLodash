import baseXor from "../utils/baseXor";
import isArrayLikeObject from "../Language/isArrayLikeObject";
/** 创建一个给定数组唯一值的数组，使用symmetric difference做等值比较
 * 。返回值的顺序取决于他们数组的出现顺序。 */
function xor(...arrs: any[][]) {
  return baseXor(arrs.filter(isArrayLikeObject));
}
export default xor;
