const hasOwnProperty = Object.prototype.hasOwnProperty;
/** 检查 path 是否是object对象的直接属性。 */
function has(obj: any, key: string) {
  return obj != null && hasOwnProperty.call(obj, key);
}
export default has;
