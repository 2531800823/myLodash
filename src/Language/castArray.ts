/** 如果 value 不是数组, 那么强制转为数组。 */
function castArray(...args: any[]) {
  if (!args.length) {
    return [];
  }

  const value = args[0];
  return Array.isArray(value) ? value : [value];
}
export default castArray;
