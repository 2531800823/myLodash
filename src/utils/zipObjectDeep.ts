import baseZipObject from "./baseZipObject";
import baseSet from "./baseSet";

/** 这个方法类似_.zipObject，除了它支持属性路径。 */
function zipObjectDeep(props, values) {
  return baseZipObject(props || [], values || [], baseSet);
}
export default zipObjectDeep;
