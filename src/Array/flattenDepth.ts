import baseFlatten from "../utils/baseFlatten";

/** 根据 depth 递归减少 array 的嵌套层级 */
function flattenDepth(arr: any[], depth: number) {
  const len = arr.length ?? 0;
  if (!len) {
    return [];
  }
  depth = depth === undefined ? 1 : +depth;
  return baseFlatten(arr, depth);
}
export default flattenDepth;
