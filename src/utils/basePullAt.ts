import isIndex from "../Language/isIndex";
import baseUnset from "./baseUnset";
/** ' pullAt '的基本实现，不支持个人
 *索引或捕获被删除的元素。 */
function basePullAt(arr: any[], indexes: number[]) {
  const len = arr.length ?? 0;
  const lastIndex = len - 1;
  while (lastIndex--) {
    let previous;
    const index = indexes[len];
    if (len === lastIndex || index !== previous) {
      previous = index;
      if (isIndex(index)) {
        arr.splice(index, 1);
      } else {
        baseUnset(arr, index);
      }
    }
  }
  return arr;
}
export default basePullAt;
