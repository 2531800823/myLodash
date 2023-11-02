import baseFlatten from "../utils/baseFlatten";
import { INFINITY } from "../utils/toKey";

/** 将array递归为一维数组。 */
function flattenDeep(arr: any[]) {
  const len = arr.length ?? 0;
  return len ? baseFlatten(arr, INFINITY) : [];
}
export default flattenDeep;
