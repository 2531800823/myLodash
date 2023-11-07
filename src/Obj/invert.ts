const toString = Object.prototype.toString;
/** 创建一个object键值倒置后的对象。
 *  如果 object 有重复的值，后面的值会覆盖前面的值。 */
function invert(obj: any) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    if (value != null && typeof value.toString !== "function") {
      value = toString.call(value);
    }
    result[value] = key;
  });

  return result;
}
export default invert;
