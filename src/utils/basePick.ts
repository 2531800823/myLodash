import basePickBy from "./basePickBy";
import hasIn from "../Obj/hasIn";
/**  pick '的基本实现，不支持individual
属性标识符。 */
function basePick(obj: any, paths: any[]) {
  return basePickBy(obj, paths, (value, path) => hasIn(obj, path));
}
export default basePick;
