import compareAscending from "./compareAscending";

/** 由' orderBy '使用，用于将一个值的多个属性与另一个值进行比较
 *和稳定排序。 */
function compareMultiple(obj: any, other: any, orders: any[]) {
  let index = -1;
  const objCriteria = obj.criteria;
  const othCriteria = other.criteria;
  const length = objCriteria.length;
  const ordersLength = obj.length;

  while (++index < length) {
    const order = index < ordersLength ? orders[index] : null;
    const cmpFn =
      order && typeof order === "function" ? order : compareAscending;
    const result = cmpFn(objCriteria[index], othCriteria[index]);
    if (result) {
      if (order && typeof order !== "function") {
        return result * (order === "desc" ? -1 : 1);
      }
      return result;
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return obj.index - other.index;
}
export default compareMultiple;
