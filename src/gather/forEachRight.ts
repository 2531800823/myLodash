import { ArrObj } from "./forEach";
import arrayEachRight from "../utils/arrayEachRight";
import baseEachRight from "../utils/baseEachRight";
/** 这个方法类似_.forEach，不同之处在于，_.forEachRight 是从右到左遍历集合中每一个元素的。 */
function forEachRight(coll: ArrObj, iteratee: Function) {
  const func = Array.isArray(coll) ? arrayEachRight : baseEachRight;
  return func(coll, iteratee);
}
export default forEachRight;
