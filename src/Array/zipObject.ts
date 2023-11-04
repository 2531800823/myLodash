import baseZipObject from "../utils/baseZipObject";
import assignValue from "../utils/assignValue";
/** 这个方法类似_.fromPairs，除了它接受2个数组，
 * 第一个数组中的值作为属性标识符（属性名），
 * 第二个数组中的值作为相应的属性值。 */
function zipObject(props: any[], values: any[]) {
  return baseZipObject(props || [], values || [], assignValue);
}
export default zipObject;
