import toInteger from "../Language/toInteger";
import slice from "./slice";

/** 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。） */
function dropRight(array: any[], n = 1) {
  const length = array.length ?? 0;
  n = length - toInteger(n);
  return length ? slice(array, 0, n < 0 ? 0 : n) : [];
}
export default dropRight;
