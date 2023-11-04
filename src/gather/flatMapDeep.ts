import { ArrObj } from "./forEach";
import baseFlatten from "../utils/baseFlatten";
import map from "./map";
import { INFINITY } from "../utils/toKey";
/** 这个方法类似_.flatMap 不同之处在于，_.flatMapDeep 会继续扁平化递归映射的结果。 */
function flatMapDeep(coll: ArrObj, iteratee: Function) {
  return baseFlatten(map(coll, iteratee), INFINITY);
}
export default flatMapDeep;
