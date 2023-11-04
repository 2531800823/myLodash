import { ArrObj } from "./forEach";
import isArrayLike from "../Language/isArrayLike";
import values from "../Obj/values";
import toInteger from "../Language/toInteger";
import isString from "../Language/isString";
import baseIndexOf from "../utils/baseIndexOf";

/** Math.max */
export const nativeMax = Math.max;

/** 检查 value(值) 是否在 collection(集合) 中。如果 collection(集合)是一个字符串
 * ，那么检查 value（值，子字符串） 是否在字符串中， 否则使用SameValueZero 做等值比较。
 *  如果指定 fromIndex 是负数，那么从 collection(集合) 的结尾开始检索。 */
function includes(coll: ArrObj, value: any, fromIndex = 0, gard?: any) {
  coll = isArrayLike(coll) ? coll : values(coll);
  fromIndex = fromIndex && !gard ? toInteger(fromIndex) : 0;

  const len = coll.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(len + fromIndex, 0);
  }

  return isString(coll)
    ? fromIndex <= len && coll.indexOf(value, fromIndex) > -1
    : !!len && baseIndexOf(coll, value, fromIndex) > -1;
}
export default includes;
