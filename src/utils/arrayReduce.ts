/** 数组专用的 reduce */
function arrayReduce(
  array: any[],
  iteratee: Function,
  accumulator?: any,
  initAccum?: boolean
) {
  let index = -1;
  const length = array.length ?? 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }

  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
export default arrayReduce;
