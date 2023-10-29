import isObject from "./isObject";
import isArrayLike from "./isArrayLike";
import isIndex from "./isIndex";
import eq from "./eq";

/** 检查给定的参数是否来自迭 arguments 代对象调用 */
function isIterateeCall(value: any, index: any, object: any) {
  if (!isObject(object)) {
    return false;
  }

  const type = typeof index;
  if (
    type === "number"
      ? isArrayLike(object) && isIndex(index, object.length)
      : type === "string" && index in object
  ) {
    return eq(object[index], value);
  }

  return false;
}
export default isIterateeCall;
