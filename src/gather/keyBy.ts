import { ArrObj } from "./forEach";
import reduce from "./reduce";
import baseAssignValue from "../utils/baseAssignValue";
/** 创建一个对象组成， key（键） 是 collection（集合）中的每个元素经过 iteratee（迭代函数）
 *  处理后返回的结果。 每个 key（键）对应的值是生成key（键）的最后一个元素。
 * iteratee（迭代函数）调用1个参数：(value)。 */
function keyBy(coll: ArrObj, iteratee: Function) {
  return reduce(
    coll,
    (res: object, value: any) => {
      baseAssignValue(res, iteratee(value), value);
      return res;
    },
    {}
  );
}
export default keyBy;
