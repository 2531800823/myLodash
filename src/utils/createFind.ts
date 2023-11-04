import isArrayLike from "../Language/isArrayLike";
import keys from "../Obj/keys";
import baseIteratee from "./baseIteratee";

/** 创建一个“_”。找到“或”_。findLast”功能。 */
function createFind(findIndexFunc: Function) {
  return function (coll: any[], predicate: Function, fromIndex: number) {
    let iterable = Object(coll);
    if (!isArrayLike(coll)) {
      var iteratee = baseIteratee(predicate, 3);
      coll = keys(coll);
      predicate = function (key) {
        return iteratee(iterable[key], key, iterable);
      };
    }
    const index = findIndexFunc(coll, predicate, fromIndex);
    return index > -1 ? iterable[iterable ? coll[index] : index] : undefined;
  };
}
export default createFind;
