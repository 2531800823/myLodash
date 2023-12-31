import isLength from "./isLength";

/** 检查 value 是否是类数组。
 *  如果一个值被认为是类数组，那么它不是一个函数，并且value.length是个整数，大于等于 0，
 * 小于或等于 Number.MAX_SAFE_INTEGER。 */
function isArrayLike(value: any): value is Array<any> {
  return value != null && typeof value !== "function" && isLength(value.length);
}
export default isArrayLike;
