import isIterateeCall from "../Language/isIterateeCall";
import baseFill from "../utils/baseFill";

/** 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。 */
function fill(array: any[], value: any, start: number, end: number) {
  const length = array.length ?? 0;
  if (!length) {
    return [];
  }
  if (
    start &&
    typeof start != "number" &&
    isIterateeCall(array, value, start)
  ) {
    start = 0;
    end = length;
  }

  return baseFill(array, value, start, end);
}
export default fill;
