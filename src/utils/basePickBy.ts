import baseGet from "./baseGet";
import baseSet from "./baseSet";
import castPath from "./castPath";

/** ' pickBy '的基本实现。 */
function basePickBy(obj: any, paths: any[], predicate: Function) {
  let index = -1;
  const length = paths.length;
  const result = {};

  while (++index < length) {
    const path = paths[index];
    const value = baseGet(obj, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, obj), value);
    }
  }
  return result;
}
export default basePickBy;
