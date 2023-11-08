/** 反向版_.mapValues。 这个方法创建一个对象，
 * 对象的值与object相同，并且 key 是通过 iteratee 运行
 *  object 中每个自身可枚举属性名字符串 产生的。
 * iteratee调用三个参数： (value, key, object)。 */
function mapKeys(obj: any, iteratee: Function) {
  obj = Object(obj);
  const result = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    result[iteratee(value, key, obj)] = value;
  });
  return obj;
}
export default mapKeys;
