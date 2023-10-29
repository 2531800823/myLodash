import baseGet from "./baseGet";

/** 获取' object '的' path '处的值。如果解析值为
 * ' undefined '，返回' defaultValue '。 */
function get(obj: object, path: string | string[], defaultValue?: any) {
  const result = obj == null ? undefined : baseGet(obj, path);
  return result === undefined ? defaultValue : result;
}
export default get;
