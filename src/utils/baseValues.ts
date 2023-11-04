/** ' values '和' valuesIn '的基本实现创建一个
与属性名称相对应的“object”属性值数组 */
function baseValues(obj: any, props: any[]) {
  return props == null ? [] : props.map((key) => obj[key]);
}
export default baseValues;
