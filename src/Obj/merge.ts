import createAssigner from "../utils/createAssigner";
import baseMerge from "../utils/baseMerge";
/** 该方法类似_.assign， 除了它递归合并 sources 来源对象自身和继承的可枚举属性到
 * object 目标对象。如果目标值存在，被解析为undefined的sources 来源对象属性将被跳过
 * 。数组和普通对象会递归合并，其他对象和值会被直接分配覆盖
 * 。源对象从从左到右分配。后续的来源对象属性会覆盖之前分配的属性。 */
const merge = createAssigner((object, source, srcIndex) => {
  baseMerge(object, source, srcIndex);
});
export default merge;
