import last from "./last";
import castArrayLikeObject from "../utils/castArrayLikeObject";
import map from "../gather/map";
import baseIntersection from "../utils/baseIntersection";
/** 这个方法类似_.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，
 * 通过产生的值进行了比较。
 * 结果值是从第一数组中选择。iteratee 会传入一个参数：(value)。 */
function intersectionBy(...arrays: any[][]) {
  let iteratee = last(arrays);
  const mapped = map(arrays, castArrayLikeObject);
  if (iteratee === last(mapped)) {
    iteratee = undefined;
  } else {
    mapped.pop();
  }
  return mapped.length && mapped[0] === arrays[0]
    ? baseIntersection(mapped, iteratee)
    : [];
}
export default intersectionBy;
