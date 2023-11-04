import { ArrObj } from "./forEach";
import filter from "../Array/filter";
import filterObject from "../utils/filterObject";
import negate from "../func/negate";
/** _.filter的反向方法;此方法 返回 predicate（断言函数） 不 返回 truthy（真值）
 * 的collection（集合）元素（注释：非真）。 */
function reject(coll: ArrObj, predicate: Function) {
  const func = Array.isArray(coll) ? filter : filterObject;

  return func(coll, negate(predicate));
}
export default reject;
