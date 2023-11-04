import slice from "./slice";

/** 创建一个数组切片，从array数组的最后一个元素开始提取n个元素。 */
function takeRight(arr: any[], n = 1) {
  const len = arr.length ?? 0;
  if (!len) {
    return [];
  }
  n = len - n;
  return slice(arr, n < 0 ? 0 : n, len);
}
export default takeRight;
