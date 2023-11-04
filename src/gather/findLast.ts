import findLastIndex from "../Array/findLastIndex";
import createFind from "../utils/createFind";

/** 这个方法类似_.find ，不同之处在于，
 * _.findLast是从右至左遍历collection （集合）元素的。 */
const findLast = createFind(findLastIndex);
export default findLast;
