import toInteger from "../Language/toInteger";
import toLength from "../Language/toLength";

/** Fill的基本实现。在没有迭代调用守卫的情况下填充 */
function baseFill(array: any[], value: any, start: number, end: number) {
  const length = array.length ?? 0;
  start = toInteger(start);
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end === undefined || end > length ? length : toInteger(end);
  if (end < 0) {
    end += length;
  }
  end = start > end ? 0 : toLength(end);

  while (start < end) {
    array[start++] = value;
  }

  return array;
}
export default baseFill;
