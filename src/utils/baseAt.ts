import get from "./get";

/** ' at '的基本实现，不支持单独的路径。 */
function baseAt(obj: object, paths: string[]) {
  let index = -1;
  const { length } = paths;
  const result = new Array(length);
  const skip = obj == null;

  while (++index < length) {
    result[index] = skip ? undefined : get(obj, paths[index]);
  }
  return result;
}
export default baseAt;
