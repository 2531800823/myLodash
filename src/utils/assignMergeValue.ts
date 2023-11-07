import eq from "../Language/eq";
import baseAssignValue from "./baseAssignValue";

/** 这个函数类似于' assignValue '，除了它不赋值
 *“未定义”值。 */
function assignMergeValue(obj: any, key: string, value: any) {
  if (
    (value !== undefined && !eq(obj[key], value)) ||
    (value === undefined && !(key in obj))
  ) {
    baseAssignValue(obj, key, value);
  }
}
export default assignMergeValue;
