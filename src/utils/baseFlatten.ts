import isFlattenable from "./isFlattenable";

/** 扁平化的基本实现，支持有限制的扁平化 */
function baseFlatten(
  array,
  depth,
  predicate = isFlattenable,
  isStrict = false,
  result = []
) {
  if (array == null) {
    return result;
  }

  for (const value of array) {
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, isStrict, result);
      } else {
        result.push(...value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
export default baseFlatten;
