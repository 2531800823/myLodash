import eq from "../Language/eq";
import baseAssignValue from "./baseAssignValue";
/** 如果现有值不相等，则将' value '标记为' object '的' key '。 */
function assignValue(obj: object, key: string, value: any) {
  const objValue = obj[key];
  if (Object.prototype.hasOwnProperty.call(obj, key) && eq(objValue, value)) {
    if (value !== 0 || 1 / value === 1 / objValue) {
      baseAssignValue(obj, key, value);
    }
  } else if (value === undefined && !(key in obj)) {
    baseAssignValue(obj, key, value);
  }
}
export default assignValue;
