/** 通过 predicate（断言函数） 检查 collection（集合）中的 所有 元素是否都返回真值
 * 。一旦 predicate（断言函数） 返回假值，迭代就马上停止
 * 。predicate（断言函数）调用三个参数： (value, index|key, collection)。 */
function every(arr: any[], predicate: Function) {
  let index = -1;
  const len = arr.length ?? 0;
  while (++index < len) {
    if (!predicate(arr[index], index, arr)) {
      return false;
    }
  }
  return true;
}
export default every;
