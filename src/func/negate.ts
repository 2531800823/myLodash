/** 函数返回值取反 */
function negate(predicate: Function) {
  if (typeof predicate !== "function") {
    throw new TypeError("使用函数");
  }
  return function (...args) {
    return !predicate.apply(this, args);
  };
}
export default negate;
