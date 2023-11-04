import last from "./last";
import baseUniq from "../utils/baseUniq";
import baseFlatten from "../utils/baseFlatten";
import isArrayLikeObject from "../Language/isArrayLikeObject";
/** 这个方法类似_.union， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。
 *  comparator 调用时会传入2个参数： (arrVal, othVal)。 */
function unionWith(...arrs: any) {
  let comparator = last(arrs);
  comparator = typeof comparator === "function" ? comparator : undefined;
  return baseUniq(
    baseFlatten(arrs, 1, isArrayLikeObject, true),
    undefined,
    comparator
  );
}
export default unionWith;
