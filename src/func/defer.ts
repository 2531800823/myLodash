import { ERROR_NOT_FUNCTION } from "./debounce";
/** 推迟调用func，直到当前堆栈清理完毕。 调用时，任何附加的参数会传给func。 */
function defer(func: Function, ...args: any[]) {
  if (typeof func !== "function") {
    throw new TypeError(ERROR_NOT_FUNCTION);
  }

  return setTimeout(func, 1, ...args);
}
export default defer;
