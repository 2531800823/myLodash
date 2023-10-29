/** 最大安全整 */
export const MAX_SAFE_INTEGER = 9007199254740991;

/** 用于检测无符号整数值。 */
const reIsUnit = /^(?:0|[1-9]\d*)$/;

/** 检查' value '是否是一个有效的类似数组的索引。 */
function isIndex(value: any, length: number) {
  const type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return (
    !!length &&
    (type === "number" || (type !== "symbol" && reIsUnit.test(value))) &&
    value > -1 &&
    value % 1 === 0 &&
    value < length
  );
}

export default isIndex;
