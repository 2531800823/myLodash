import { ArrObj } from "./forEach";
import isArrayLikeObject from "../Language/isArrayLikeObject";
import isArrayLike from "../Language/isArrayLike";
import isString from "../Language/isString";
import stringSize from "../utils/stringSize";
import getTag from "../utils/getTag";
const mapTag = "[object Map]";
const setTag = "[object Set]";
/** 返回collection（集合）的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数。
 */
function size(coll: ArrObj) {
  if (coll == null) {
    return 0;
  }
  if (isArrayLike(coll)) {
    return isString(coll) ? stringSize(coll) : coll.length;
  }
  const tag = getTag(coll);
  if (tag == mapTag || tag === setTag) {
    return coll.size;
  }

  return Object.keys(coll).length;
}
export default size;
