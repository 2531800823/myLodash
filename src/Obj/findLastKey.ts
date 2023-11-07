import baseFindKey from "../utils/baseFindKey";
import baseForRight from "../utils/baseForRight";
/** 这个方法类似_.findKey。 不过它是反方向开始遍历的 */
function findLastKey(obj: any, predicate) {
  return baseFindKey(obj, predicate, baseForRight);
}
export default findLastKey;
