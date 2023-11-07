/** 这个方法类似_.find 。 除了它返回最先被 predicate 判断为真值的元素 key，而不是元素本身。 */
function findKey(obj: any, predicate: Function) {
  if (obj == null) {
    return undefined;
  }

  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = obj[key];
    if (predicate(value, key, obj)) {
      return key;
    }
  }
  return undefined;
}
export default findKey;
