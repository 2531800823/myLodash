import isArrayLike from "../Language/isArrayLike";
import arrayLikeKeys from "../utils/arrayLikeKeys";
/** 创建一个 object 的自身可枚举属性名为数组。 */
function keys(obj: object) {
  return isArrayLike(obj) ? arrayLikeKeys(obj) : Object.keys(Object(obj));
}
export default keys;
