import { ArrObj } from "../gather/forEach";
/** findKey和findLastKey等方法的基本实现
 *使用' eachFunc '迭代' collection '。 */
function baseFindKey(coll: ArrObj, predicate: Function, eachFunc: Function) {
  let result;
  eachFunc(coll, (val, key, coll) => {
    if (predicate(val, key, coll)) {
      result = key;
      return false;
    }
  });
  return result;
}
export default baseFindKey;
