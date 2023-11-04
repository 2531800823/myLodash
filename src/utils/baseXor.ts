import baseUniq from "./baseUniq";
import baseDifference from "./baseDifference";
import baseFlatten from "./baseFlatten";
/** 像' xor '这样的方法的基本实现，它接受数组
 *要检查的数组 */
function baseXor(arras: any[], iteratee?: Function, comparator?: Function) {
  const length = arras.length;
  if (length < 2) {
    return length ? baseUniq(arras[0]) : 0;
  }

  let index = -1;
  const result = new Array(length);

  while (++index < length) {
    const arr = arras[index];
    let othIndex = -1;
    while (++othIndex !== index) {
      if (othIndex !== index) {
        result[index] = baseDifference(
          result[index] || arr,
          arras[othIndex],
          iteratee,
          comparator
        );
      }
    }
  }
  return baseUniq(baseFlatten(result, 1), iteratee, comparator);
}
export default baseXor;
