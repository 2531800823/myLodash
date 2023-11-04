import last from "./last";
import isArrayLikeObject from "../Language/isArrayLikeObject";
import baseUniq from "../utils/baseUniq";
import baseFlatten from "../utils/baseFlatten";
/** 这个方法类似_.union ，除了它接受一个 iteratee （迭代函数），
 * 调用每一个数组（array）的每个元素以产生唯一性计算的标准。
 * iteratee 会传入一个参数：(value)。 */
function unionBy(...arrs: any) {
  let iteratee = last(arrs);

  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }

  return baseUniq(baseFlatten(arrs, 1, isArrayLikeObject, true), iteratee);
}
export default unionBy;
