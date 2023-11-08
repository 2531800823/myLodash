import baseUpdate from "../utils/baseUpdate";
/** 该方法类似_.set，除了接受updater以生成要设置的值。
 * 使用_.updateWith来自定义生成的新path。updater调用1个参数：(value)。 */
function update(obj: any, path: string | string[], updater: Function) {
  return obj == null ? obj : baseUpdate(obj, path, updater);
}
export default update;
