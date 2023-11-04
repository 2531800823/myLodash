import slice from "../Array/slice";
/** ' dropWhile '和' takeWhile '这样方法的基本实现。 */
function baseWhile(
  array: any[],
  predicate: Function,
  isDrop?: boolean,
  fromRight: boolean = false
) {
  const { length } = array;
  let index = fromRight ? length : -1;
  while (
    fromRight
      ? index--
      : ++index < length && predicate(array[index], index, array)
  ) {}

  return isDrop
    ? slice(array, fromRight ? 0 : index, fromRight ? index + 1 : length)
    : slice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
}
export default baseWhile;
