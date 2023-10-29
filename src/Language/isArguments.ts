import isObjectLike from "./isObjectLike";
import getTag from "../utils/getTag";

/** 检查 value 是否是一个类 arguments 对象。 */
function isArguments(value: any): value is IArguments {
  return isObjectLike(value) && getTag(value) === "[object Arguments]";
}
export default isArguments;
