import baseWhile from "../utils/baseWhile";

/** 创建一个切片数组，去除array中从起点开始到 predicate 返回 假值结束部分 。predicate 会传入3个参数： (value, index, array)。 */
function dropWhile(array: any[], predicate: Function) {
  return array != null && array.length ? baseWhile(array, predicate, true) : [];
}
export default dropWhile;
