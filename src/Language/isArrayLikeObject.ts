import isObjectLike from "./isObjectLike";
import isArrayLike from "./isArrayLike";

/** 这个方法类似_.isArrayLike。除了它还检查value是否是个对象。 */
function isArrayLikeObject(value: any): boolean {
  return isObjectLike(value) && isArrayLike(value);
}
export default isArrayLikeObject;
