/** 接受函数的 includes  */
function arrayIncludesWith<T>(
  array: T[],
  target: any,
  comparator: (item: any, value: T) => boolean
) {
  if (array == null) {
    return false;
  }
  for (const value of array) {
    if (comparator(target, value)) return true;
  }
  return false;
}
export default arrayIncludesWith;
