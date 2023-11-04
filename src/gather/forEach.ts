import arrayEach from "../utils/arrayEach";
import baseEach from "../utils/baseEach";
export type ArrObj = any[] | Record<string, any>;

/** 调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用3个参数： (value, index|key, collection)。
 * 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。 */
function forEach(coll: ArrObj, iteratee: Function) {
  const func = Array.isArray(coll) ? arrayEach : baseEach;
  return func(coll, iteratee);
}
export default forEach;
