/** 使用 iteratee 遍历自身的可枚举属性。
 * iteratee 会传入3个参数：(value, key, object)。
 * 如果返回 false，iteratee 会提前退出遍历。 */
function forOwn(obj: any, iteratee: Function) {
  obj = Object(obj);
  Object.keys(obj).forEach((key) => iteratee(obj[key], key, obj));
}
export default forOwn;
