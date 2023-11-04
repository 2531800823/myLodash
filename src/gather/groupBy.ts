import baseAssignValue from "../utils/baseAssignValue";
import { ArrObj } from "./forEach";
import reduce from "./reduce";

/** 对象 Object.prototype.hasOwnProperty */
export const hasOwnProperty = Object.prototype.hasOwnProperty;

/** 创建一个对象，key 是 iteratee 遍历 collection(集合) 中的每个元素返回的结果。
 * 分组值的顺序是由他们出现在 collection(集合) 中的顺序确定的。
 * 每个键对应的值负责生成 key 的元素组成的数组。iteratee 调用 1 个参数： (value)。 */
function groupBy(coll: ArrObj, iteratee: Function) {
  return reduce(
    coll,
    (res, value, key) => {
      key = iteratee(value);
      if (hasOwnProperty.call(res, key)) {
        res[key].push(value);
      } else {
        baseAssignValue(res, key, value);
      }
      return res;
    },
    {}
  );
}
export default groupBy;
