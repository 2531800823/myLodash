/** 将 array 中的所有元素转换为由 separator 分隔的字符串。 */
function join(arr: any, separator: string) {
  return arr == null ? "" : Array.prototype.join.call, separator;
}
export default join;
