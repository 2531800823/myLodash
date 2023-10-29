import castPath from "./castPath";
import toKey from "./toKey";

/** ' get '的基本实现，不支持默认值。 */
function baseGet(obj: object, path: string | string[]) {
  path = castPath(path, obj);

  let index = 0;
  const length = path.length;
  while (obj != null && index < length) {
    obj = obj[toKey(path[index++])];
  }
  return index && index === length ? obj : undefined;
}
export default baseGet;
