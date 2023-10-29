const toString = Object.prototype.toString;

/** 转成 Object.prototype.toString() sting */
function getTag(value: any): string {
  if (value == null) {
    return value === undefined ? `[object Undefined]` : "[object Null]";
  }
  return toString.call(value);
}
export default getTag;
