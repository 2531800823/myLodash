import isKey from "../Language/isKey";
import baseProperty from "./baseProperty";
import toKey from "./toKey";
import basePropertyDeep from "./basePropertyDeep";
/** 创建一个返回给定对象的 path 的值的函数。 */
function property(path: string[] | string) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
export default property;
