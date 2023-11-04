/** 这个函数类似于' baseFor '，除了它在属性上迭代
 *以相反的顺序。 */
function baseForRight(obj: any, iteratee: Function, keysFunc: Function) {
  const iterable = Object(obj);
  const props = keysFunc(obj);
  let { length } = props;
  while (length--) {
    const key = props[length];
    if (iteratee(iterable[key], key, iterable) === false) {
      break;
    }
  }
  return obj;
}
export default baseForRight;
