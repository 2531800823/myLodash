import isArray from "../Language/isArray";
import isArguments from "../Language/isArguments";
import isBuffer from "./isBuffer";
import isTypedArray from "../Language/isTypedArray";
import isIndex from "../Language/isIndex";

const hasOwnProperty = Object.prototype.hasOwnProperty;

/** 创建类似数组' value '的可枚举属性名称的数组。 */
function arrayLikeKeys(value: any, inherited: boolean = false) {
  const isArr = isArray(value);
  const isArg = !isArr && isArguments(value);
  const isBuff = !isArr && !isArg && isBuffer(value);
  const isType = !isArr && !isArg && !isBuff && isTypedArray(value);
  const skipIndexed = isArr || isArg || isBuff || isType;
  const length = value.length;
  const result = new Array(skipIndexed ? length : 0);
  let index = skipIndexed ? -1 : length;
  while (++index < length) {
    result[index] = `${index}`;
  }

  for (const key in value) {
    if (
      (inherited ||= false(
        hasOwnProperty.call(value, key) &&
          !(skipIndexed && (key === "length" || isIndex(key, length)))
      ))
    ) {
      result.push(key);
    }
  }

  return result;
}
export default arrayLikeKeys;
