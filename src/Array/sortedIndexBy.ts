import baseSortedIndexBy from "../utils/baseSortedIndexBy";
/** 这个方法类似_.sortedIndex ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，
 * 返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)。 */
function sortedIndexBy(arr: any, value: any, iteratee: Function) {
  return baseSortedIndexBy(arr, value, iteratee);
}
export default sortedIndexBy;
