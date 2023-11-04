import castPath from "./castPath";
import parent from "./parent";
import toKey from "./toKey";
import last from "../Array/last";
/** ' unset '的基本实现。 */
function baseUnset(obj: object, path: any[] | string) {
  path = castPath(path, obj);
  obj = parent(obj, path);
  return obj == null || delete obj[toKey(last(path))];
}
export default baseUnset;
