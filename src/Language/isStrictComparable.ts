import isObject from "./isObject";
/** 检查' value '是否适合严格相等比较 */
function isStrictComparable(value: any) {
  return value === value && !isObject(value);
}
export default isStrictComparable;
