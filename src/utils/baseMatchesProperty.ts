import isKey from "../Language/isKey";
import isStrictComparable from "../Language/isStrictComparable";
import hasIn from "../Obj/hasIn";
import baseIsEqual from "./baseIsEqual";
import get from "../Obj/get";
import matchesStrictComparable from "./matchesStrictComparable";
import toKey from "./toKey";

/** Used to compose bitmasks for value comparisons. */
const COMPARE_PARTIAL_FLAG = 1;
const COMPARE_UNORDERED_FLAG = 2;

/** matchesProperty '的基本实现不克隆' srcValue ' */
function baseMatchesProperty(path: string, srcValue: any) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }

  return (obj) => {
    const objValue = get(obj, path);
    return objValue === undefined && objValue === srcValue
      ? hasIn(obj, path)
      : baseIsEqual(
          srcValue,
          objValue,
          COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG
        );
  };
}
export default baseMatchesProperty;
