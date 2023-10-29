import last from "./last";
import isArrayLikeObject from "../Language/isArrayLikeObject";
import baseDifference from "../utils/baseDifference";
import baseFlatten from "../utils/baseFlatten";

/** 这个方法类似_.difference ，除了它接受一个 iteratee （注：迭代器），
 * 调用array 和 values 中的每个元素以产生比较的标准。
 * 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。
 * （注：首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。 */
function differenceBy(array: any[], ...values: any[]) {
  let iteratee = last(values);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return isArrayLikeObject(array)
    ? baseDifference(
        array,
        baseFlatten(values, 1, isArrayLikeObject, true),
        iteratee
      )
    : [];
}
export default differenceBy;
