/** 移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较。这个方法会改变数组。 */
function pull(arr: any[], ...values: any[]) {
  return pullAll(arr, values);
}
export default pull;
