import slice from "./slice";

/** 创建一个数组切片，从array数组的起始元素开始提取n个元素 */
function take(arr: any[], n = 1) {
  if (!(arr != null && arr.length)) {
    return [];
  }

  return slice(arr, 0, n < 0 ? 0 : n);
}
export default take;
