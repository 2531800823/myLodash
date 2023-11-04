import filter from "./filter";
import isArrayLikeObject from "../Language/isArrayLikeObject";
import baseProperty from "../utils/baseProperty";
import map from "../gather/map";

/** 这个方法类似于_.zip，除了它接收分组元素的数组，并且创建一个数组
 * ，分组元素到打包前的结构。（：返回数组的第一个元素包含所有的输入数组的第一元素，
 * 第一个元素包含了所有的输入数组的第二元素，依此类推。） */
function unzip(array: any[]) {
  if (!(array != null && array.length)) {
    return [];
  }

  let length = 0;
  array = filter(array, (group) => {
    if (isArrayLikeObject(group)) {
      length = Math.max(group.length, length);
      return true;
    }
  });
  let index = -1;
  const result = new Array(length);
  while (++index < length) {
    result[index] = map(array, baseProperty(index));
  }
  return result;
}
export default unzip;
