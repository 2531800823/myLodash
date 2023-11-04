import isArrayLikeObject from "../Language/isArrayLikeObject";
import baseXor from "../utils/baseXor";
import last from "./last";

/** xorWith */
function xorWith(...arrs: any[][]) {
  let comparator = last(arrs);
  if (isArrayLikeObject(comparator)) {
    comparator = undefined;
  }
  return baseXor(arrs.filter(isArrayLikeObject), undefined, comparator);
}
export default xorWith;
