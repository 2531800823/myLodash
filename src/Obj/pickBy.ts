import map from "../gather/map";
import getAllKeysIn from "../utils/getAllKeysIn";
import basePickBy from "../utils/basePickBy";
/** 创建一个对象，这个对象组成为从 object 中经 predicate 判断为真值的属性
 * 。 predicate调用2个参数：(value, key)。 */
function pickBy(obj: any, predicate: Function) {
  if (obj == null) {
    return {};
  }
  const props = map(getAllKeysIn(obj), (prop) => [prop]);
  return basePickBy(obj, props, (val, path) => predicate(val, path, path[0]));
}
export default pickBy;
