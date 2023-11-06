/** _.before的反向函数;此方法创建一个函数，
 * 当他被调用n或更多次之后将马上触发func 。 */
function after(n: number, func: Function) {
  if (typeof func !== "function") {
    throw new TypeError("参数不是一个函数");
  }

  n = n || 0;
  return function (this: any, ...args: any[]) {
    if (n-- < 1) {
      return func.apply(this, args);
    }
  };
}
export default after;
