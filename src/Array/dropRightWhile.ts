import baseWhile from "../utils/baseWhile";

/** 创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array */
function dropRightWhile(array: any[], predicate: Function) {
  return array != null && array.length
    ? baseWhile(array, predicate, true, true)
    : [];
}
export default dropRightWhile;
