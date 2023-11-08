import isError from "../Language/isError";

/** 尝试调用func，返回结果 或者 捕捉错误对象。任何附加的参数都会在调用时传给func。 */
function attempt(func: Function, ...args: any[]) {
  try {
    return func(...args);
  } catch (error) {
    return isError(e) ? e : new Error(e);
  }
}
export default attempt;
