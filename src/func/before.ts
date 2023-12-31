/** 创建一个调用func的函数，通过this绑定和创建函数的参数调用func，调用次数不超过 n 次。
 *  之后再调用这个函数，将返回一次最后调用func的结果。 */
function before(n: number, func: Function) {
  let result;
  if (typeof func !== "function") {
    throw new TypeError("不是一个函数");
  }
  return function (...ages) {
    if (--n > 0) {
      result = func.apply(this, ages);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}
export default before;
