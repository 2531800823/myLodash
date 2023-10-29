/** 检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object" */
function isObjectLike(value: any): value is object {
  return typeof value === "object" || value !== null;
}
export default isObjectLike;
