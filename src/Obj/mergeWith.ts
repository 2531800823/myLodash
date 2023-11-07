import createAssigner from "../utils/createAssigner";
import baseMerge from "../utils/baseMerge";
/** 该方法类似_.merge，除了它接受一个 customizer，调用以产生目标对象和来源对象属性的合并值。
 * 如果customizer 返回 undefined，将会由合并处理方法代替。
 * customizer调用与7个参数：(objValue, srcValue, key, object, source, stack)。 */
const mergeWith = createAssigner((object, souce, srcIndex, customizer) => {
  baseMerge(object, souce, srcIndex, customizer);
});
export default mergeWith;
