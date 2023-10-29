import toInteger from "./toInteger";
/** 数组最大长度 */
export const MAX_ARRAY_LENGTH = 4294967295;

/** 将' value '转换为适合用作对象长度的整数 */
function toLength(value: any) {
  if (!value) {
    return 0;
  }
  value = toInteger(value);
  if (value < 0) {
    return 0;
  }

  if (value > MAX_ARRAY_LENGTH) {
    return MAX_ARRAY_LENGTH;
  }
  return value;
}
export default toLength;
