import baseSet from "../utils/baseSet";
/** 这个方法类似_.set，除了它接受一个 customizer，调用生成对象的 path。
 *  如果 customizer 返回 undefined 将会有它的处理方法代替。
 *  customizer 调用3个参数： (nsValue, key, nsObject)。 */
function setWith(obj: any, path: any, value: any, customizer: Function) {
  customizer = typeof customizer === "function" ? customizer : undefined;
  return obj == null ? obj : baseSet(obj, path, value, customizer);
}
export default setWith;
