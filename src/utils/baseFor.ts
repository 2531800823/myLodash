/** baseFor */
function baseFor(obj: any, iteratee: Function, keysFunc: Function) {
  const iterable = Object(obj);
  const props = keysFunc(obj);

  let { length } = props;
  let index = -1;
  while (length--) {
    const key = props[++index];
    if (iteratee(iterable[key], key, iterable) === false) {
      break;
    }
  }
  return obj;
}
export default baseFor;
