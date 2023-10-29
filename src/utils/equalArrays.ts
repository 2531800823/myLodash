import some from "../Array/some";
import SetCache from "./SetCache";
import cacheHas from "./cacheHas";
const COMPARE_PARTIAL_FLAG = 1;
const COMPARE_UNORDERED_FLAG = 2;

/** 支持的数组的' baseIsEqualDeep '的专用版本
 *部分深度比较 */
function equalArrays(
  array: any[],
  other: any[],
  bitmask: boolean,
  customizer: Function,
  equalFunc: Function,
  stack: object
) {
  const isPartial = bitmask & COMPARE_PARTIAL_FLAG;
  const arrLength = array.length;
  const othLength = other.length;

  if (arrLength !== othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }

  const stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked === other;
  }

  let index = -1;
  let result = true;
  const seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  while (++index < arrLength) {
    let compared;
    const arrValue = array[index];
    const othValue = other[index];

    if (customizer) {
      compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (
        !some(
          other,

          (othValue, othIndex) => {
            if (
              !cacheHas(seen, othIndex) &&
              (arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack))
            ) {
              return seen.push(othIndex);
            }
          }
        )
      ) {
        result = false;
        break;
      } else if (
        !(
          arrValue === othValue ||
          equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )
      ) {
        result = false;
        break;
      }
    }
  }

  stack["delete"](array);
  stack["delete"](other);
  return result;
}
export default equalArrays;
