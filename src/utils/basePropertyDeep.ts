import baseGet from "./baseGet";
/** 一个特殊版本的' baseProperty '，支持深度路径。 */
function basePropertyDeep(path: string[] | string) {
  return (obj) => baseGet(obj, path);
}
export default basePropertyDeep;
