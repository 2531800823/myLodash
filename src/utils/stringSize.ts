import hasUnicode from "./hasUnicode";
import unicodeSize from "./unicodeSize";
import asciiSize from "./asciiSize";
/** 获取' string ' 的长度。 */
function stringSize(str: string) {
  return hasUnicode(str) ? unicodeSize(str) : asciiSize(str);
}
export default stringSize;
