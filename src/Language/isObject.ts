/** 检查 value 是否为 Object 的language type。 */
function isObject(value: any): value is object {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
}
export default isObject;
