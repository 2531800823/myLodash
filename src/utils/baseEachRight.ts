import { ArrObj } from "../gather/forEach";
import isArrayLike from "../Language/isArrayLike";
import baseForOwnRight from "./baseForOwnRight";
/**  forEachRight '的基本实现。 */
function baseEachRight(coll: ArrObj, iteratee: Function) {
  if (coll == null) {
    return coll;
  }

  if (!isArrayLike(coll)) {
    return baseForOwnRight(coll, iteratee);
  }

  const iterable = Object(coll);
  let length = coll.length;

  while (length--) {
    if (iteratee(iterable[length], length, iterable) === false) {
      break;
    }
  }
  return coll;
}
export default baseEachRight;
