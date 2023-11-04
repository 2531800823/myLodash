/** ' zipoject '的基本实现，它使用' assignFunc '赋值。 */
function baseZipObject(props: any[], values: any[], assignFunc: Function) {
  let index = -1;
  const length = props.length;
  const valLength = values.length;
  const result = {};
  while (++index < length) {
    const value = index < valLength ? values[index] : undefined;
    assignFunc(result, props[index], value);
  }
  return result;
}
export default baseZipObject;
