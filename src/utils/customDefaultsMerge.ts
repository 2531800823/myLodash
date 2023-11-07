import isObject from "../Language/isObject";
import baseMerge from "./baseMerge";
/** 由' defaultsDeep '使用，用于自定义其' merge '用于合并源
 *对象转换为目标对象。 */
function customDefaultsMerge(
  objValue: any,
  srcValue: any,
  key: string,
  obj: object,
  source: object,
  stack?: any
) {
  if (isObject(objValue) && isObject(srcValue)) {
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack["delete"](srcValue);
  }
  return objValue;
}
export default customDefaultsMerge;
