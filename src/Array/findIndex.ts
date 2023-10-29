import toInteger from "../Language/toInteger";
import baseFindIndex from "../utils/baseFindIndex";
import baseIteratee from "../utils/baseIteratee";
/** findIndex */
function findIndex(array: any[], predicate: Function, fromIndex: number) {
  const length = array.length ?? 0;
  if (!length) {
    return -1;
  }
  let index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = Math.max(length + index, 0);
  }

  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}
export default findIndex;
