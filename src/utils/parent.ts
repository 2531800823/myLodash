import baseGet from "./baseGet";
import slice from "../Array/slice";
/** 获取' object '的' path '处的父值。 */
function parent(obj: object, path: any[]) {
  return path.length < 2 ? obj : baseGet(obj, slice(path, 0, -1));
}
export default parent;
