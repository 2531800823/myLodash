import isArrayLike from "../Language/isArrayLike";
import baseForOwn from "./baseForOwn";
/** baseEach */
function baseEach(coll: any[] | object, iteratee: Function) {
  if (coll == null) {
    return coll;
  }
  if (!isArrayLike(coll)) {
    return baseForOwn(coll, iteratee);
  }

  const length = coll.length;
  const iterable = Object(coll);
  let index = -1;

  while (++index < length) {
    if (iteratee(iterable[index], index, iterable) === false) {
      break;
    }
  }

  return coll;
}
export default baseEach;
