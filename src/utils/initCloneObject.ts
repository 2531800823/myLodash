import isPrototype from "../Language/isPrototype";
/** 初始化对象克隆。 */
function initCloneObject(obj: any) {
  return typeof obj.constructor === "function" && !isPrototype(obj)
    ? Object.create(Object.getPrototypeOf(obj))
    : {};
}
export default initCloneObject;
