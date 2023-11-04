import { ArrObj } from "./forEach";
import baseFlatten from "../utils/baseFlatten";
import map from "./map";
/** 该方法类似_.flatMap，不同之处在于，
 * _.flatMapDepth 会根据指定的 depth（递归深度）继续扁平化递归映射结果。 */
function flatMapDepth(coll: ArrObj, iteratee: Function, depth?: number) {
  depth = depth === undefined ? 1 : +depth;
  return baseFlatten(map(coll, iteratee), depth);
}
export default flatMapDepth;
