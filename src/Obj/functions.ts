/** 创建一个函数属性名称的数组，函数属性名称来自object对象自身可枚举属性。 */
function functions(obj: any) {
  if (obj == null) {
    return [];
  }
  return Object.keys(obj).filter((key) => typeof obj[key] === "function");
}
export default functions;
