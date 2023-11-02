import baseFlatten from "../utils/baseFlatten";

/** 减少一级array嵌套深度。 */
function flatten(arr: any[]) {
  const len = arr.length ?? 0;
  return len ? baseFlatten(arr, 1) : [];
}
export default flatten;
