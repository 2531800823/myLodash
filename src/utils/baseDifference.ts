import map from "../gather/map";
import arrayIncludes from "./arrayIncludes";
import arrayIncludesWith from "./arrayIncludesWith";
import cacheHas from "./cacheHas";
import SetCache from "./SetCache";

/** 超过这个数量后就开始使用缓存了 */
const LARGE_ARRAY_SIZE = 200;

/** differenceBy 的基础实现 */
function baseDifference(
  array: any[],
  values: any[],
  iteratee?: Function,
  comparator?: Function
) {
  let includes = arrayIncludes;
  let isCommon = true;
  const result: any[] = [];
  const valueLength = values.length;

  if (!array.length) {
    return result;
  }
  if (iteratee) {
    values = map(values, (value) => iteratee(value));
  }

  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }

  outer: for (const value of array) {
    const computed = iteratee == null ? value : iteratee(value);
    value = comparator || value !== 0 ? value : 0;
    if (isCommon && computed === computed) {
      let valuesIndex = valueLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    } else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}
export default baseDifference;
