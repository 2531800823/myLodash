/** 检查' path '是否是' object '的直接属性或继承属性 */
function hasIn(obj: object, key: string) {
  return obj != null && key in Object(obj);
}
export default hasIn;
