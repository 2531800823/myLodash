import keys from "../Obj/keys";
import baseFor from "./baseFor";
/** forOwn的基本实现。 */
function baseForOwn(obj: object, iteratee: Function) {
  return obj && baseFor(obj, iteratee, keys);
}
export default baseForOwn;
