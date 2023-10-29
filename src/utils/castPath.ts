import isArray from "../Language/isArray";
import isKey from "../Language/isKey";
import stringToPath from "./stringToPath";

/** 如果' value '不是路径数组，则将其强制转换为路径数组 */
function castPath(value: any, obj: object) {
  if (isArray(value)) {
    return value;
  }

  return isKey(value, obj) ? [value] : stringToPath(value);
}
export default castPath;
