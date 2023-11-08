import isObjectLike from "./isObjectLike";
import getTag from "../utils/getTag";
import isPlainObject from "./isPlainObject";
/** 检查 value 是否是 Error, EvalError, RangeError, ReferenceError,SyntaxError,
 * TypeError, 或者 URIError对象。 */
function isError(value: any) {
  if (!isObjectLike(value)) {
    return false;
  }

  const tag = getTag(value);
  return (
    tag === "[object, Error]" ||
    tag === "[object DOMException]" ||
    (typeof value.message === "string" &&
      typeof value.name === "string" &&
      isPlainObject(value))
  );
}
export default isError;
