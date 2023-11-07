import baseFor from "./baseFor";
import isObject from "../Language/isObject";
import Stack from "./Stack";
import keysIn from "../Obj/keysIn";
import baseMergeDeep from "./baseMergeDeep";
import assignMergeValue from "./assignMergeValue";
/** 不支持多源的“merge”的基本实现。 */
function baseMerge(
  obj: any,
  source: any,
  srcIndex: number,
  customizer?: Function,
  stack?: any
) {
  if (obj === source) {
    return;
  }

  baseFor(
    source,
    (srcValue, key) => {
      if (isObject(srcValue)) {
        stack || (stack = new Stack());
        baseMergeDeep(obj, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        let newValue = customizer
          ? customizer(obj[key], srcValue, `${key}`, obj, source, stack)
          : undefined;
        if (newValue === undefined) {
          newValue = srcValue;
        }

        assignMergeValue(obj, key, newValue);
      }
    },
    keysIn
  );
}
export default baseMerge;
