import arrayIncludesWith from "./arrayIncludesWith";
import arrayIncludes from "./arrayIncludes";
import { INFINITY } from "./toKey";
import map from "../gather/map";
import SetCache from "./SetCache";
import cacheHas from "./cacheHas";
/** intersection 方法的基本实现，比如接受一个
 *要检查的数组数组 */
function baseIntersection(
  arrays: any[][],
  iteratee?: Function,
  comparator?: Function
) {
  const includes = comparator ? arrayIncludesWith : arrayIncludes;

  const length = arrays[0].length;
  const othLength = arrays.length;
  const caches = new Array(othLength);
  const result = [];

  let arr,
    maxLength = INFINITY,
    othIndex = othLength;

  while (othIndex--) {
    arr = arrays[othIndex];
    if (othIndex && iteratee) {
      arr = map(arr, (val) => iteratee(val));
    }
    maxLength = Math.min(arr.length, maxLength);
    caches[othIndex] =
      !comparator && (iteratee || (length >= 120 && arr.length >= 120))
        ? new SetCache(othIndex && arr)
        : undefined;
  }

  arr = arrays[0];

  let index = -1;
  const seen = caches[0];

  outer: while (++index < length && result.length < maxLength) {
    let value = arr[index];
    const computed = iteratee ? iteratee(value) : value;
    value = comparator || value !== 0 ? value : 0;
    if (
      !(seen
        ? cacheHas(seen, computed)
        : includes(result, computed, comparator))
    ) {
      othIndex = othLength;
      while (--othIndex) {
        const cache = caches[othIndex];
        if (
          !(cache
            ? cacheHas(cache, computed)
            : includes(arrays[othIndex], computed, comparator))
        ) {
          continue outer;
        }

        if (seen) {
          seen.push(computed);
        }

        result.push(value);
      }
    }
  }
  return result;
}
export default baseIntersection;
