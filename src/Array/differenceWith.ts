import last from "./last";
import isArrayLikeObject from "../Language/isArrayLikeObject";
import baseDifference from "../utils/baseDifference";
import baseFlatten from "../utils/baseFlatten";

/** 这个方法类似_.difference ，除了它接受一个 comparator （注：比较器），
 * 它调用比较array，values中的元素。
 * 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。
 */
function differenceWith(array: any[], ...values: any[]) {
  let comparator = last(values);
  if (isArrayLikeObject(comparator)) {
    comparator = undefined;
  }

  return isArrayLikeObject(array)
    ? baseDifference(
        array,
        baseFlatten(values, 1, isArrayLikeObject, true),
        undefined,
        comparator
      )
    : [];
}
export default differenceWith;
