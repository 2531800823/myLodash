import arrayIncludes from "./arrayIncludes";
import arrayIncludesWith from "./arrayIncludesWith";
import createSet from "./createSet";
import setToArray from "./setToArray";
import cacheHas from "./cacheHas";
import SetCache from "./SetCache";

/** 大于开启缓存 */
export const LARGE_ARRAY_SIZE = 200;

/** ' uniqBy '的基本实现 */
function baseUniq(arr: any[], iteratee?: Function, comparator?: Function) {
  let index = -1;
  let includes = arrayIncludes;
  let isCommon = true;
  const { length } = arr;
  const result = [];
  let seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  } else if (length > LARGE_ARRAY_SIZE) {
    const set = iteratee ? null : createSet(arr);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee ? [] : result;
  }

  outer: while (++index < length) {
    let value = arr[index];
    const computed = iteratee ? iteratee(value) : value;
    value = comparator || value !== 0 ? value : 0;
    if (isCommon && computed === computed) {
      let seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      }
    } else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}
export default baseUniq;
