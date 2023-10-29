import isArray from "./isArray";
import isSymbol from "./isSymbol";
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const reIsPlainProp = /^\w*$/;

/** 检查' value '是否是属性名而不是属性路径 */
function isKey(value: any, object?: object) {
  if (isArray(value)) {
    return false;
  }

  const type = typeof value;
  if (
    type === "number" ||
    type === "boolean" ||
    value === null ||
    isSymbol(value)
  ) {
    return true;
  }

  return (
    reIsPlainProp.test(value) ||
    !reIsDeepProp.test(value) ||
    (object != null && value in Object(object))
  );
}
export default isKey;
