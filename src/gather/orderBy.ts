import { ArrObj } from "./forEach";
import baseOrderBy from "../utils/baseOrderBy";
/** 此方法类似于_.sortBy，除了它允许指定 iteratee（迭代函数）结果如何排序。
 *  如果没指定 orders（排序），所有值以升序排序。
 *  否则，指定为"desc" 降序，或者指定为 "asc" 升序，排序对应值。 */
function orderBy(coll: ArrObj, iteratee?: any[], orders?: any[]) {
  if (coll == null) {
    return [];
  }
  if (!Array.isArray(iteratee)) {
    iteratee = iteratee == null ? [] : [iteratee];
  }
  if (!Array.isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }

  return baseOrderBy(coll, iteratee, orders);
}
export default orderBy;
