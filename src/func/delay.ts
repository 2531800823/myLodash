import { ERROR_NOT_FUNCTION } from "./debounce";
/** 延迟 wait 毫秒后调用 func。
 * 调用时，任何附加的参数会传给func。 */
function delay(func: Function, wait: number, ...args: any[]) {
  if (typeof func !== "function") {
    throw new TypeError(ERROR_NOT_FUNCTION);
  }
  return setTimeout(func, +wait || 0, ...args);
}
export default delay;
