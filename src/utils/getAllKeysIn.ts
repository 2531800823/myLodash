import getSymbolsIn from "./getSymbolsIn";
/** 创建一个包含自己和继承的可枚举属性名和' object '符号的数组 */
function getAllKeysIn(obj: any) {
  const result = [];
  for (const key in obj) {
    result.push(key);
  }

  if (!Array.isArray(obj)) {
    result.push(...getSymbolsIn(obj));
  }
  return result;
}
export default getAllKeysIn;
