import { ArrObj } from "./forEach";
import reduce from "./reduce";
/** 创建一个分成两组的元素数组，第一组包含predicate（断言函数）返回为 truthy（真值）的元素，
 * 第二组包含predicate（断言函数）返回为 falsey（假值）的元素。
 * predicate 调用1个参数：(value)。 */
function partition(coll: ArrObj, predicate: Function) {
  return reduce(
    coll,
    (res, value) => {
      res[predicate(value) ? 0 : 1].push(value);
      return res;
    },
    [[], []]
  );
}
export default partition;
