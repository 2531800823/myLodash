import baseForRight from "./baseForRight";
import keys from "../Obj/keys";
/** forOwnRight的基本实现。 */
function baseForOwnRight(obj: any, iteratee: Function) {
  return obj && baseForRight(obj, iteratee, keys);
}
export default baseForOwnRight;
