import { ArrObj } from "./forEach";
import isArrayLike from "../Language/isArrayLike";
import baseEach from "../utils/baseEach";
import invoke from "../Obj/invoke";
/** 调用path（路径）上的方法处理 collection(集合)中的每个元素，返回一个数组，
 * 包含每次调用方法得到的结果。
 * 任何附加的参数提供给每个被调用的方法。
 * 如果methodName（方法名）是一个函数，每次调用函数时，内部的 this 指向集合中的每个元素。 */
function invokeMap(
  coll: ArrObj,
  path: any[] | Function | string,
  args?: any[]
) {
  let index = -1;
  const isFun = typeof path === "function";
  const result = isArrayLike(coll) ? new Array(coll.length) : [];

  baseEach(coll, (val) => {
    result[++index] = isFun ? path.call(val, args) : invoke(val, path, args);
  });
  return result;
}
export default invokeMap;
