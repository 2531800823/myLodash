import keys from "../Obj/keys";
import isStrictComparable from "../Language/isStrictComparable";

/** 获取“object”的属性名称、值和比较标志。 */
function getMatchData(obj) {
  const result = keys(obj);
  let length = result.length;
  while (length--) {
    const key = result[length];
    const value = obj[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
export default getMatchData;
