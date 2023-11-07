import customDefaultsMerge from "../utils/customDefaultsMerge";
import mergeWith from "./mergeWith";
/** 这个方法类似_.defaults，除了它会递归分配默认属性。 */
function defaultsDeep(...args: any[]) {
  args.push(undefined, customDefaultsMerge);
  return mergeWith.apply(undefined, args);
}
export default defaultsDeep;
