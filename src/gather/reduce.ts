import arrayReduce from "../utils/arrayReduce";
import baseReduce from "../utils/baseReduce";
import baseEach from "../utils/baseEach";
/** reduce */
function reduce(coll: any[] | object, iteratee: Function, accumulator?: any) {
  const func = Array.isArray(coll) ? arrayReduce : baseReduce;

  const initAccum = arguments.length < 3;

  return func(coll, iteratee, accumulator, initAccum, baseEach);
}
export default reduce;
