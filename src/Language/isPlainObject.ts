import isObjectLike from "./isObjectLike";
import getTag from "../utils/getTag";

/** 检查 value 是否是普通对象。
 * 也就是说该对象由 Object 构造函数创建，或者 [[Prototype]] 为 null 。 */
function isPlainObject(value: any) {
  if (!isObjectLike(value) || getTag(value) !== "[object Object]") {
    return false;
  }

  if (Object.getPrototypeOf(value) === null) {
    return true;
  }

  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}
export default isPlainObject;
