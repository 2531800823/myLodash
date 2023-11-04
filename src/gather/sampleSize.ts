import copyArray from "../utils/copyArray";
import slice from "../Array/slice";
/** 从collection（集合）中获得 n 个随机元素。 */
function sampleSize(arr: any[], n: number = 1) {
  const len = arr.length ?? 0;
  if (!len || n < 1) {
    return [];
  }

  n = n > len ? len : n;
  let index = -1;
  const lastIndex = len - 1;
  const result = copyArray(arr);

  while (++index < n) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }

  return slice(result, 0, n);
}
export default sampleSize;
