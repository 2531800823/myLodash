/** 执行SameValueZero 比较两者的值，来确定它们是否相等。 */
function eq(value: any, other: any) {
  return value === other || (value !== value && other !== other);
}
export default eq;
