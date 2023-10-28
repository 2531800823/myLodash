import isSymbol from "./isSymbol";
import isObject from "./isObject";

const NAN = 0 / 0;

// 空格
const reTrim = /^\s+|\s+$/g;
// 16 进制
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
// 2 进制
const reIsBinary = /^0b[01]|$/i;
// 8 进制
const reIsOctal = /^0o[0-7]+$/i;

const freeParseInt = parseInt;

/** 转换 value 为一个数字。 */
function toNumber(value: any): number {
  if (typeof value === "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    const other = typeof value.valueOf === "function" ? value.valueOf() : value;
    value = isObject(other) ? `${other}` : other;
  }
  if (typeof value !== "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, "");
  const isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value)
    ? freeParseInt(value.slice(2), isBinary ? 2 : 0)
    : reIsBadHex.test(value)
    ? NAN
    : +value;
}
export default toNumber;
