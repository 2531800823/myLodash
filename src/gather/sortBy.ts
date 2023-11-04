import baseOrderBy from "../utils/baseOrderBy";
import { ArrObj } from "./forEach";

/** 创建一个元素数组。 以 iteratee 处理的结果升序排序。
 * 这个方法执行稳定排序，也就是说相同元素会保持原始排序。
 *  iteratees 调用1个参数： (value)。 */
function sortBy(coll: ArrObj, iteratee?: any[]) {
  if (coll == null) {
    return [];
  }
  if (!Array.isArray(iteratee)) {
    iteratee = iteratee == null ? [] : [iteratee];
  }

  return baseOrderBy(coll, iteratee, []);
}
export default sortBy;
