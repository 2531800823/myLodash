import isObjectLike from "../Language/isObjectLike";
import baseIsEqualDeep from "./baseIsEqualDeep";
/** baseIsEqual */
function baseIsEqual(
  value: any,
  other: any,
  bitmask: boolean,
  customizer?: Function,
  stack?: object
) {
  if (value === other) {
    return true;
  }
  if (
    value == null ||
    other == null ||
    (!isObjectLike(value) && !isObjectLike(other))
  ) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
export default baseIsEqual;
