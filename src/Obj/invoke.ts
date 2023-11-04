import castPath from "../utils/castPath";
import parent from "../utils/parent";
import toKey from "../utils/toKey";
import last from "../Array/last";

/** 调用object对象path上的方法。 */
function invoke(obj: any, path: any[] | string, args?: any[]) {
  path = castPath(path, obj);
  obj = parent(obj, path);
  const func = obj == null ? obj : obj[toKey(last(path))];
  return func == null ? undefined : func.apply(obj, args);
}
export default invoke;
