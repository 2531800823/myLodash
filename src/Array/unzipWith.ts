import map from "../gather/map";
import unzip from "./unzip";

/** 此方法类似于_.unzip，除了它接受一个iteratee指定重组值应该如何被组合。
 * iteratee 调用时会传入每个分组的值： (...group)。 */
function unzipWith(arr: any[], iteratee?: Function) {
  if (!(arr != null && arr.length)) {
    return [];
  }

  const result = unzip(arr);
  return map(result, (group) => iteratee?.apply(undefined, group));
}
export default unzipWith;
