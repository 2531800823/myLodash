import debounce, { ERROR_NOT_FUNCTION } from "./debounce";
import isObject from "../Language/isObject";

export interface Options {
  /** 指定调用在节流开始前。 */
  leading: boolean;
  /** 指定调用在节流结束后。 */
  trailing: boolean;
}
/** 创建一个节流函数 */
function throttle(func: Function, wait: number, options: Options) {
  let leading = true;
  let trailing = true;

  if (typeof func !== "function") {
    throw new TypeError(ERROR_NOT_FUNCTION);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    leading = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    leading,
    trailing,
    maxWait: wait,
  });
}

export default throttle;
