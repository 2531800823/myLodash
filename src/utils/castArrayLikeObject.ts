import isArrayLikeObject from "../Language/isArrayLikeObject";

/** 如果' value '不是类似object的数组，则将其强制转换为空数组 */
function castArrayLikeObject(value: any): any[] {
  return isArrayLikeObject(value) ? value : [];
}
export default castArrayLikeObject;
