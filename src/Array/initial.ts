import slice from "./slice";

/** 获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素） */
function initial(arr: any[]) {
  const len = arr.length ?? 0;
  return len ? slice(arr, 0, -1) : [];
}
export default initial;
