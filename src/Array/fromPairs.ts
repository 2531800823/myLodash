/** 与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。 */
function fromPairs(arr: any[]) {
  let index = -1;
  const length = arr.length ?? 0;
  const result: Record<string, any> = {};

  while (++index < length) {
    var item = arr[index];
    result[item[0]] = item[1];
  }
  return result;
}
export default fromPairs;
