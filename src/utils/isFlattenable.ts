import isArray from "../Language/isArray";
import isArguments from "../Language/isArguments";

/** 给数组 arr[Symbol.isConcatSpreadable] 就不支持扩展了
 * 如：arr[spreadableSymbol] = false
 */
const spreadableSymbol = Symbol.isConcatSpreadable;

/** 检查数组是否可以扁平化 */
function isFlattenable(value: any) {
  return (
    isArray(value) || isArguments(value) || !!(value && value[spreadableSymbol])
  );
}
export default isFlattenable;
