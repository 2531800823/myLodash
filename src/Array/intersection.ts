import map from "../gather/map";
import castArrayLikeObject from "../utils/castArrayLikeObject";
import baseIntersection from "../utils/baseIntersection";

/** 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用SameValueZero进行相等性比较。（注：可以理解为给定数组的交集） */
function intersection(...arrays: any[][]) {
  const mapped = map(arrays, castArrayLikeObject);
  return mapped.length && mapped[0] === arrays[0]
    ? baseIntersection(mapped)
    : [];
}
export default intersection;
