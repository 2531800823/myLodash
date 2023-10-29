import keys from "../Obj/keys";
import isArray from "../Language/isArray";
import getSymbols from "./getSymbols";

/** getAllKeys */
function getAllKeys(obj) {
  const result = keys(obj);
  if (!isArray(obj)) {
    result.push(...getSymbols(obj));
  }
}
export default getAllKeys;
