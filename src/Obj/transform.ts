import isBuffer from "../utils/isBuffer";
import isTypedArray from "../Language/isTypedArray";
import isObject from "../Language/isObject";
import arrayEach from "../utils/arrayEach";
import baseForOwn from "../utils/baseForOwn";
/** _.reduce的替代方法;此方法将转换object对象为一个新的accumulator对象，
 * 结果来自iteratee处理自身可枚举的属性。 每次调用可能会改变 accumulator 对象。
 * 如果不提供accumulator，将使用与[[Prototype]]相同的新对象。iteratee调用4个参数
 * ：(accumulator, value, key, object)。如果返回 false，iteratee 会提前退出。 */
function transform(obj: any, iteratee: Function, accumulator: any) {
  const isArr = Array.isArray(obj);
  const isArrLike = isArr || isBuffer(obj) || isTypedArray(obj);

  if (accumulator == null) {
    const Ctor = obj && obj.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor() : [];
    } else if (isObject(obj)) {
      accumulator =
        typeof Ctor === "function"
          ? Object.create(Object.getPrototypeOf(obj))
          : {};
    } else {
      accumulator = {};
    }

    (isArrLike ? arrayEach : baseForOwn)(obj, (value, index, _obj) => {
      iteratee(accumulator, value, index, _obj);
    });

    return accumulator;
  }
}
export default transform;
