/** ' reduce '和' reduceRight '迭代的基本实现
 *在' collection '上面使用' eachFunc '。 */
function baseReduce(
  coll: any[] | object,
  iteratee: Function,
  accumulator: any,
  initAccum: any,
  eachFunc: Function
) {
  eachFunc(coll, (val, index, coll) => {
    accumulator = initAccum
      ? ((initAccum = false), val)
      : iteratee(accumulator, val, index, coll);
  });
  return accumulator;
}
export default baseReduce;
