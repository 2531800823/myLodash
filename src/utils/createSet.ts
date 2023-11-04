import setToArray from "./setToArray";
import { INFINITY } from "./toKey";

/** 创建一个 Set 对象 */
const createSet =
  Set && 1 / setToArray(new Set([, -0]))[1] === INFINITY
    ? (values) => new Set(values)
    : () => {};
export default createSet;
