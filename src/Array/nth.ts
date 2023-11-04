import isIndex from "../Language/isIndex";
/** 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。 */
function nth(arr: any[], n: number) {
  const len = arr.length ?? 0;
  if (!len) {
    return;
  }
  n += n < 0 ? len : 0;

  return isIndex(n, len) ? arr[n] : undefined;
}
export default nth;
