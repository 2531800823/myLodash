import nodeTypes from "../utils/nodeTypes";
import isObjectLike from "./isObjectLike";
import getTag from "../utils/getTag";

/** Used to match `toStringTag` values of typed arrays. */
const reTypedTag =
  /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;

/* Node.js helper references. */
const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray;

/** 检查 value 是否是TypedArray。 */
const isTypedArray = nodeIsTypedArray
  ? (value) => nodeIsTypedArray(value)
  : (value) => isObjectLike(value) && reTypedTag.test(getTag(value));
export default isTypedArray;
