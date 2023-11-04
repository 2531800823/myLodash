import copyArray from "../utils/copyArray";
/** 创建一个被打乱值的集合。 使用Fisher-Yates shuffle 版本。 */
function shuffle(arr: any[]) {
  const len = arr.length ?? 0;
  if (!len) {
    return [];
  }

  let index = -1;
  const lastIndex = len - 1;
  const result = copyArray(arr);
  while (++index < len) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return result;
}
export default shuffle;
