import isArray from "../Language/isArray";
import arrayPush from "../utils/arrayPush";
import baseFlatten from "../utils/baseFlatten";
import copyArray from "../utils/copyArray";

/** 创建一个新数组，将array与任何数组 或 值连接在一起。 */
function concat() {
  const length = arguments.length;
  if (!length) {
    return [];
  }
  const args = Array(length - 1),
    arr = arguments[0];
  let index = length;
  while (index--) {
    args[index - 1] = arguments[index];
  }
  return arrayPush(isArray(arr) ? copyArray(arr) : [arr], baseFlatten(args, 1));
}
export default concat;
