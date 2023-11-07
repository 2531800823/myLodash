const hasOwnProperty = Object.prototype.hasOwnProperty;

/** 这个方法类似_.invert，除了倒置对象 是 collection（集合）中的每个元素经过
 * iteratee（迭代函数） 处理后返回的结果。每个反转键相应反转的值是一个负责生成反转值key的数组。
 * iteratee 会传入3个参数：(value) 。 */
function invertBy(obj: any, iteratee: Function) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    const value = iteratee(obj[key]);
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key);
    } else {
      result[value] = [key];
    }
  });
  return result;
}
export default invertBy;
