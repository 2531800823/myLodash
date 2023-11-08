import baseSet from "../utils/baseSet";
/** 设置 object对象中对应 path 属性路径上的值，如果path不存在，则创建。
 * 缺少的索引属性会创建为数组，而缺少的属性会创建为对象。
 *  使用_.setWith 定制path创建。 */
function set(obj: any, path, value) {
  return obj == null ? obj : baseSet(obj, path, value);
}
export default set;
