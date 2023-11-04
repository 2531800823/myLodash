/** ' sortBy '的基本实现，它使用' comparer '来定义
 *排序' array '的顺序，并用相应的标准对象替换
 *值。 */
function baseSortBy(arr: any[], comparer: Function) {
  let { length } = arr;

  arr.sort(comparer);
  while (length--) {
    arr[length] = arr[length].values;
  }

  return arr;
}
export default baseSortBy;
