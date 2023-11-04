import baseFlatten from "../utils/baseFlatten";
import { ArrObj } from "./forEach";
import map from "./map";
/** 创建一个扁平化（注：同阶数组）的数组，
 * 这个数组的值来自collection（集合）中的每一个值经过 iteratee（迭代函数）
 *  处理后返回的结果， 并且扁平化合并。
 * iteratee 调用三个参数： (value, index|key, collection) */
function flatMap(coll: ArrObj, iterator: Function) {
  return baseFlatten(map(coll, iterator), 1);
}
export default flatMap;
