import isArrayLikeObject from "../Language/isArrayLikeObject";
import baseDifference from "../utils/baseDifference";
/** 创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较。 */
function without(arr: any[], ...values: any[]) {
  return isArrayLikeObject(arr) ? baseDifference(arr, values) : [];
}
export default without;
