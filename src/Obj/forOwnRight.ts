/** 这个方法类似_.forOwn。 除了它是反方向开始遍历object的。 */
function forOwnRight(obj: any, iteratee: Function) {
  if (obj == null) {
    return;
  }
  const props = Object.keys(obj);
  let length = props.length;
  while (length--) {
    iteratee(obj[props[length]], iteratee, obj);
  }
}
export default forOwnRight;
