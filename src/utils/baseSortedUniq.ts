import eq from "../Language/eq";

/** ' sortedUniq '和' sortedUniqBy '的基本实现。 */
function baseSortedUniq(arr: any[], iteratee?: Function) {
  let seen;
  let index = -1;
  let resIndex = 0;

  const { length } = arr;
  const result = [];
  while (++index < length) {
    const value = arr[index];
    const computed = iteratee ? iteratee(value) : value;
    if (!index || !eq(computed, seen)) {
      seen = computed;
      result[resIndex++] = value === 0 ? 0 : value;
    }
  }
  return result;
}
export default baseSortedUniq;
