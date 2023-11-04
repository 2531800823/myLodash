import { ArrObj } from "./forEach";
import arrayReduceRight from "../utils/arrayReduceRight";
import baseReduce from "../utils/baseReduce";
import baseEachRight from "../utils/baseEachRight";
/** 这个方法类似_.reduce ，除了它是从右到左遍历collection（集合）中的元素的。 */
function reduceRight(coll: ArrObj, iteratee: Function, accumulator?: any) {
  const func = Array.isArray(coll) ? arrayReduceRight : baseReduce;
  const initAccum = arguments.length < 3;
  return func(coll, iteratee, accumulator, initAccum, baseEachRight);
}
export default reduceRight;
