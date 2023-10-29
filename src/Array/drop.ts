import toInteger from "../Language/toInteger";
import slice from "./slice";

/** 创建一个切片数组，去除array前面的n个元素。（n默认值为1。） */
function drop(array: any[], n = 1) {
  const length = array.length ?? 0;
  return length ? slice(array, n < 0 ? 0 : toInteger(0), length) : [];
}
export default drop;
