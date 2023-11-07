/** 迭代' object '的' baseForOwn '的基本实现
 *由' keyfunc '返回的属性，并为每个属性调用' iteree '。
 *可迭代函数可以通过显式返回' false '提前退出迭代。 */
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
