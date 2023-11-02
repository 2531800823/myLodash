import last from "./last";
import castArrayLikeObject from "../utils/castArrayLikeObject";
import map from "../gather/map";
import baseIntersection from "../utils/baseIntersection";
/** 这个方法类似_.intersection，区别是它接受一个 comparator 调用比较arrays中的元素。结果值是从第一数组中选择 */
function intersectionWith(arrays: any[][]) {
  let comparator = last(arrays);
  const mapped = map(arrays, castArrayLikeObject);

  comparator = typeof comparator === "function" ? comparator : undefined;
  if (comparator) {
    mapped.pop();
  }

  return mapped.length && mapped[0] === arrays[0]
    ? baseIntersection(mapped, undefined, comparator)
    : [];
}
export default intersectionWith;
