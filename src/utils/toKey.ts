import isSymbol from "../Language/isSymbol";
/** 表示无穷大的特殊值 */
export const INFINITY = 1 / 0;

/** toKey */
function toKey(value: any): string | symbol {
  if (typeof value === "string" || isSymbol(value)) {
    return value;
  }

  const result = `${value}`;
  return result === "0" && 1 / value === -INFINITY ? "-0" : result;
}
export default toKey;
