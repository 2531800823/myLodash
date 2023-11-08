import map from "../gather/map";
import { ERROR_NOT_FUNCTION } from "./debounce";
/** 创建了一个函数，这个函数会迭代pairs，并调用最先返回真值对应的函数。
 * 该断言函数对绑定 this 及传入创建函数的参数。 */
function cond(pairs: any[]) {
  const length = pairs.length;
  pairs = !length
    ? []
    : map(pairs, (pair: any[]) => {
        if (typeof pair[1] !== "function") {
          throw new TypeError(ERROR_NOT_FUNCTION);
        }
        return [pair[0], pair[1]];
      });

  return function (this: any, ...args: any[]) {
    for (const pair of pairs) {
      if (pair[0].apply(this, args)) {
        return pair[1].apply(this, args);
      }
    }
  };
}
export default cond;
