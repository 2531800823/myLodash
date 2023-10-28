import getTag from "../utils/getTag";

/** 检查 value 是否是原始 Symbol 或者对象。 */
function isSymbol(value: any): value is symbol {
  const type = typeof value;
  return (
    type === "symbol" ||
    (type === "object" && value != null && getTag(value) === "[object Symbol]")
  );
}

export default isSymbol;
