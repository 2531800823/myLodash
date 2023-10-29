/** ' findIndex '和' findLastIndex '的基本实现。 */
function baseFindIndex(
  array: any[],
  predicate: Function,
  fromIndex: number,
  fromRight: boolean = false
) {
  const { length } = array;
  let index = fromIndex + (fromRight ? 1 : -1);

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
export default baseFindIndex;
