import strictIndexOf from "./strictIndexOf";
import baseFindIndex from "./baseFindIndex";
import baseIsNaN from "./baseIsNaN";

/** baseIndexOf */
function baseIndexOf(array: any[], value: any, fromIndex: number) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}
export default baseIndexOf;
