import isObject from "../Language/isObject";
import castPath from "./castPath";
import toKey from "./toKey";
import isIndex from "../Language/isIndex";
import assignValue from "./assignValue";
/** ' set '的基本实现。 */
function baseSet(
  obj: any,
  path: string | string[],
  value?: any,
  customizer?: Function
) {
  if (!isObject(obj)) {
    return obj;
  }

  path = castPath(path, obj);
  const length = path.length;
  const lastIndex = length - 1;
  let index = -1;
  let nested = obj;

  while (nested != null && ++index < length) {
    const key = toKey(path[index]);
    let newValue = value;

    if (index !== lastIndex) {
      const objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : isIndex(path[index + 1])
          ? []
          : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return obj;
}
export default baseSet;
