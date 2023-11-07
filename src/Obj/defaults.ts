import eq from "../Language/eq";

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/** 分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上。
 * 来源对象从左到右应用。 一旦设置了相同属性的值，后续的将被忽略掉。 */
function defaults(object: any, ...sources: any[]) {
  object = Object(object);
  sources?.forEach((source) => {
    if (source != null) {
      source = Object(source);
      for (const key in source) {
        const value = object[key];
        if (
          value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))
        ) {
          object[key] = source[key];
        }
      }
    }
  });
  return object;
}
export default defaults;
