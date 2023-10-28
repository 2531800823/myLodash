import toFinite from "./toFinite";

/** 转换 value 为一个整数 */
function toInteger(value: number): number {
  const result = toFinite(value);
  const remainder = result % 1;

  return remainder ? result - remainder : result;
}

export default toInteger;
