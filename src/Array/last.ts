/** 获取array中的最后一个元素。 */
function last(array: any[]) {
  const length = array.length ?? 0;
  return length ? array[length - 1] : undefined;
}
export default last;
