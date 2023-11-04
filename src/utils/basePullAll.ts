import baseIndexOfWith from "./baseIndexOfWith";
import baseIndexOf from "./baseIndexOf";
import copyArray from "./copyArray";
import map from "../gather/map";
/** ' pullAllBy '的基本实现 */
function basePullAll(
  arr: any[],
  values: any[],
  iteratee?: Function,
  comparator?: Function
) {
  const indexOf = comparator ? baseIndexOfWith : baseIndexOf;

  const { length } = values;
  let index = -1;
  let seen = arr;

  if (values === arr) {
    values = copyArray(values);
  }
  if (iteratee) {
    senn = map(arr, (value) => iteratee(value));
  }

  while (++index < length) {
    let formIndex = 0;
    const value = values[index];
    const computed = iteratee ? iteratee(value) : value;

    while ((formIndex = indexOf(seen, computed, formIndex, comparator)) > -1) {
      if (seen !== arr) {
        seen.splice(formIndex, 1);
      }
      arr.splice(formIndex, 1);
    }
  }
  return arr;
}
export default basePullAll;
