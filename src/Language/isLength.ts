const MAX_SAFE_INTEGER = 9007199254740991;
/** 检查 value 是否为有效的类数组长度。 */
function isLength(value: any) {
  return (
    typeof value === "number" &&
    value > -1 &&
    value % 1 === 0 &&
    value <= MAX_SAFE_INTEGER
  );
}
export default isLength;
