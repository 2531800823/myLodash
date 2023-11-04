import { ArrObj } from "../gather/forEach";
import baseGet from "./baseGet";
import isArrayLike from "../Language/isArrayLike";
import baseEach from "./baseEach";
import baseSortBy from "./baseSortBy";
import compareMultiple from "./compareMultiple";

const identity = (value) => value;

/** 没有参数保护的' orderBy '的基本实现 */
function baseOrderBy(coll: ArrObj, iteratee: any[], orders: any[]) {
  if (iteratee.length) {
    iteratee = iteratee.map((it) => {
      if (Array.isArray(it)) {
        return (val) => baseGet(val, it.length === 1 ? it[0] : it);
      }
    });
  } else {
    iteratee = [identity];
  }

  let criteriaIndex = -1;
  let eachIndex = -1;
  const result = isArrayLike(coll) ? new Array(coll.length) : [];
  baseEach(coll, (val) => {
    const criteria = iteratee.map((iteratee) => iteratee(val));

    result[++eachIndex] = {
      criteria,
      index: ++criteriaIndex,
      val,
    };
  });

  return baseSortBy(result, (obj, other) =>
    compareMultiple(obj, other, orders)
  );
}
export default baseOrderBy;
