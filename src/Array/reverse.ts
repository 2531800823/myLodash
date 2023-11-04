/** 反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。 */
function reverse(arr: any[]) {
  return arr == null ? arr : Array.prototype.reverse.call(arr);
}
export default reverse;
