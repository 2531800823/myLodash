/** 这个函数类似于' baseIndexOf '，只是它接受比较器。 */
function baseIndexOfWith(
  arr: any[],
  value: any[],
  fromIndex: number,
  comparator: Function
) {
  let index = fromIndex - 1;
  const { length } = arr;
  while (++index < length) {
    if (comparator(arr[index], value)) {
      return index;
    }
  }

  return -1;
}
export default baseIndexOfWith;
