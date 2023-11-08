import baseUpdate from "../utils/baseUpdate";
/** 该方法类似_.update，不同之处在于它接受customizer，调用来生成新的对象的path。
 * 如果customizer返回undefined，路径创建由该方法代替
 * 。customizer调用有三个参数：(nsValue, key, nsObject) 。 */
function updateWith(
  obj: any,
  path: string | string[],
  updater: Function,
  customizer?: Function
) {
  customizer = typeof customizer === "function" ? customizer : undefined;
  return obj == null ? obj : baseUpdate(obj, path, updater, customizer);
}
export default updateWith;
