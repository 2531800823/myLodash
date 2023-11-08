import basePick from "../utils/basePick";

/** 创建一个从 object 中选中的属性的对象。 */
function pick(obj: any, ...paths: any[]) {
  return obj == null ? {} : basePick(obj, paths);
}
export default pick;
