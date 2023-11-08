import castPath from "../utils/castPath";
import values from "./values";
import toKey from "../utils/toKey";
/** 这个方法类似_.get， 除了如果解析到的值是一个函数的话，
 * 就绑定 this 到这个函数并返回执行后的结果。 */
function result(obj: any, path: string, defaultValue: any) {
  path = castPath(path, obj);

  let index = -1;
  let length = path.length;

  if (!length) {
    length = 1;
    obj = undefined;
  }

  while (++index < length) {
    let value = obj == null ? undefined : obj[toKey(path[index])];
    if (value === undefined) {
      index = length;
      value = defaultValue;
    }
    obj = typeof value === "function" ? value.call(obj) : value;
  }
  return result;
}
export default result;
