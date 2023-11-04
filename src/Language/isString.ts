import getTag from "../utils/getTag";

/** 是否是字符 */
function isString(val: any): val is string {
  const type = typeof val;
  return (
    type === "string" ||
    (type === "object" &&
      val != null &&
      !Array.isArray(val) &&
      getTag(val) === "[object String]")
  );
}
export default isString;
