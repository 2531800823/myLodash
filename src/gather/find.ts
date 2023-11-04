import createFind from "../utils/createFind";
import findIndex from "../Array/findIndex";
/** 遍历 collection（集合）元素，
 * 返回 predicate（断言函数）第一个返回真值的第一个元素。
 * predicate（断言函数）调用3个参数： (value, index|key, collection)。 */
const find = createFind(findIndex);
export default find;
