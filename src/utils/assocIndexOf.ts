import eq from "../Language/eq";
/** 获取在键值对的“数组”中找到“键”所在的索引。 */
function assocIndexOf(array: any[], key: any) {
  let length = array.length;
  while (length--) {
    if (eq(array[length[0]], key)) {
      return length;
    }
  }

  return -1;
}
export default assocIndexOf;
