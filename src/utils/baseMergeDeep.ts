import assignMergeValue from "./assignMergeValue";
import isBuffer from "./isBuffer";
import isTypedArray from "../Language/isTypedArray";
import isArrayLikeObject from "../Language/isArrayLikeObject";
import copyArray from "./copyArray";
import cloneBuffer from "./cloneBuffer";
import cloneTypedArray from "./cloneTypedArray";
import isPlainObject from "../Language/isPlainObject";
import isArguments from "../Language/isArguments";
import toPlainObject from "../Language/toPlainObject";
import isObject from "../Language/isObject";
import initCloneObject from "./initCloneObject";
/** ' baseMerge '的特殊版本，用于执行数组和对象
 *深度合并和跟踪遍历对象，使对象具有圆形
 *要合并的引用。 */
function baseMergeDeep(
  obj: any,
  source: any,
  key: string,
  srcIndex: number,
  mergeFunc: Function,
  customizer?: Function,
  stack?: Function
) {
  const objValue = obj[key];
  const srcValue = source[key];
  const stacked = stack?.get(srcValue);

  if (stacked) {
    assignMergeValue(obj, key, stacked);
    return;
  }

  let newValue = customizer
    ? customizer(objValue, srcValue, `${key}`, obj, source, stack)
    : undefined;

  let isCommon = newValue === undefined;

  if (isCommon) {
    const isArr = Array.isArray(srcValue);
    const isBuff = !isArr && isBuffer(srcValue);
    const isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (Array.isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (typeof objValue === "function" || !isObject(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(obj, key, newValue);
}
export default baseMergeDeep;
