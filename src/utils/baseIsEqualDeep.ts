import isArray from "../Language/isArray";
import isTypedArray from "../Language/isTypedArray";
import equalArrays from "./equalArrays";
import equalByTag from "./equalByTag";
import getTag from "./getTag";
import isBuffer from "./isBuffer";
import Stack from "./Stack";
import equalObjects from "./equalObjects";
/** Used to compose bitmasks for value comparisons. */
const COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
const argsTag = "[object Arguments]";
const arrayTag = "[object Array]";
const objectTag = "[object Object]";

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/** baseIsEqualDeep */
function baseIsEqualDeep(
  object: any,
  other: any,
  bitmask: boolean,
  customizer: Function,
  equalFunc: Function,
  stack: object
) {
  let objIsArr = isArray(object);
  let othIsArr = isArray(other);
  const objTag = objIsArr ? arrayTag : getTag(object);
  const othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag === argsTag ? objectTag : objTag;
  othTag = othTag === argsTag ? objectTag : othTag;

  let objIsObj = objTag === objectTag;
  const othIsObj = othTag === objectTag;
  const isSameTag = objTag === othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object)
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(
          object,
          other,
          objTag,
          bitmask,
          customizer,
          equalFunc,
          stack
        );
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    const objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__");
    const othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");

    if (objIsWrapped || othIsWrapped) {
      const objUnwrapped = objIsWrapped ? object.value() : object;
      const othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
export default baseIsEqualDeep;
