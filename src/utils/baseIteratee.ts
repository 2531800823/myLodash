import isArray from "../Language/isArray";
import baseMatchesProperty from "./baseMatchesProperty";
import baseMatches from "./baseMatches";
import property from "./property";
/** baseIteratee */
function baseIteratee(value: any) {
  if (typeof value === "function") {
    return value;
  }

  if (value == null) {
    return <T>(v: T): T => v;
  }

  if (typeof value == "object") {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}
export default baseIteratee;
