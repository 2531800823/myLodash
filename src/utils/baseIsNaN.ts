/** 判断是否是 NAN */
function baseIsNaN(value: any): boolean {
  return value !== value;
}
export default baseIsNaN;
