import baseUnset from "../utils/baseUnset";
/** 移除object对象 path 路径上的属性。 */
function unset(obj: any, path: string[]) {
  return obj == null ? true : baseUnset(obj, path);
}
export default unset;
