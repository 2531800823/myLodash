/** 获取除了array数组第一个元素以外的全部元素。 */
function tail(arr: any[]) {
  const len = arr.length ?? 0;
  if (!len) {
    return [];
  }

  const [, ...result] = arr;
  return result;
}
export default tail;
