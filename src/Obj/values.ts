import baseValues from "../utils/baseValues";
import keys from "./keys";
/** 创建 object 自身可枚举属性的值为数组。 */
function values(obj: any) {
  return obj == null ? [] : baseValues(obj, keys(obj));
}
export default values;
