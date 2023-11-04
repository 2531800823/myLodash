import last from "./last";
import isArrayLikeObject from "../Language/isArrayLikeObject";
import baseXor from "../utils/baseXor";
/** 这个方法类似_.xor ，除了它接受 iteratee（迭代器）
 * 这个迭代器 调用每一个 arrays（数组）的每一个值，
 * 以生成比较的新值。iteratee 调用一个参数：(value). */
function xorBy(...arrs: any[][]) {
  let iteratee = last(arrs);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return baseXor(arrs.filter(isArrayLikeObject), iteratee);
}
export default xorBy;
