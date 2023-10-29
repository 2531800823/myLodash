/** ' indexOf '的特殊版本，执行严格的相等操作 值的比较，即= = =。 */
function strictIndexOf(array: any[], value: any, fromIndex: number): number {
  let index = fromIndex - 1;
  const { length } = array;
  while (++index < length) {
    if (array[index] === value) return index;
  }

  return -1;
}
export default strictIndexOf;
