import baseAt from "../utils/baseAt";
import baseFlatten from "../utils/baseFlatten";

/** 创建一个数组，值来自 object 的paths路径相应的值。 */
const at = (object: any, ...paths: string[]) =>
  baseAt(object, baseFlatten(paths, 1));
export default at;
