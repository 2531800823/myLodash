import unzipWith from "./unzipWith";
/** 这个方法类似于_.zip，不同之处在于它接受一个 iteratee（迭代函数），
 * 来 指定分组的值应该如何被组合。 该iteratee调用每个组的元素： (...group). */
function zipWith(...arrays: any[][]) {
  let length = arrays.length;
  let iteratee = length > 1 ? arrays[length - 1] : undefined;
  iteratee =
    typeof iteratee === "function" ? (arrays.pop(), iteratee) : undefined;

  return unzipWith(arrays, iteratee);
}
export default zipWith;
