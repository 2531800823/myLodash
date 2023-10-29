import baseIndexOf from "./baseIndexOf";
/** 手写 indexOf 然后调用的 includes */
function arrayIncludes(array: any[], value: any): boolean {
  const length = array == null ? 0 : array.length;

  return !!length && baseIndexOf(array, value, 0) > -1;
}
export default arrayIncludes;
