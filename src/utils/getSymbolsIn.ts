import getSymbols from "./getSymbols";

/** 创建一个包含自己和继承的' object '的可枚举符号的数组。 */
function getSymbolsIn(obj: any) {
  const result = [];
  while (obj) {
    result.push(...getSymbols(obj));
    obj = Object.getPrototypeOf(Object(obj));
  }
  return result;
}
export default getSymbolsIn;
