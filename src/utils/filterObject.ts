/** 迭代' object '的属性，返回一个包含所有元素的数组 */
function filterObject(obj: any, predicate: Function) {
  obj = Object(obj);
  const result = [];
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (predicate(value, key, obj)) {
      result.push(value);
    }
  });

  return result;
}
export default filterObject;
