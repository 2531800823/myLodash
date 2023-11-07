/** 转换 value 为普通对象。 包括继承的可枚举属性。 */
function toPlainObject(value: any) {
  value = Object(value);
  const result: any = {};
  for (const key in value) {
    result[key] = value[key];
  }
  return result;
}
export default toPlainObject;
