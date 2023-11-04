import reduce from "./reduce";
import baseAssignValue from "../utils/baseAssignValue";
const hasOwnProperty = Object.prototype.hasOwnProperty;

/** 创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果
 * ，每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数（注：迭代次数）。 iteratee 调用一个参数：(value)。 */
function countBy(coll: any[] | object, iteratee?: Function) {
  return reduce(
    coll,
    (result, value, key) => {
      key = iteratee(value);
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
      return result;
    },
    {}
  );
}
export default countBy;
