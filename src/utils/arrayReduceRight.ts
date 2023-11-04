/** 用于数组的' reduceRight '的特殊版本。 */
function arrayReduceRight(
  arr: any[],
  iteratee: Function,
  accumulator?: any,
  initAccum?: boolean
) {
  let length = arr.length ?? 0;
  if (initAccum && length) {
    accumulator = arr[--length];
  }
  while (length--) {
    accumulator = iteratee(accumulator, arr[length], length, arr);
  }

  return accumulator;
}
export default arrayReduceRight;
