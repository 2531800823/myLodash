/** 创建一个对象，这个对象的key与object对象相同，
 * \值是通过 iteratee 运行 object 中每个自身可枚举属性名字符串产生的。
 * iteratee调用三个参数： (value, key, object)。 */
function mapValues(obj: any, iteratee: Function) {
  obj = Object(obj);
  const result = {};

  Object.keys(obj).forEach((key) => {
    result[key] = iteratee(obj[key], key, obj);
  });
  return result;
}
export default mapValues;
