import { ERROR_NOT_FUNCTION } from "./debounce";

/** 创建一个函数，调用func时候 翻转的参数。 */
function flip(func: Function) {
  if (typeof func !== "function") {
    throw new TypeError(ERROR_NOT_FUNCTION);
  }
  return function (...args: any[]) {
    return func.apply(this, args.reverse());
  };
}
export default flip;
