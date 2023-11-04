import unzip from "./unzip";
/** 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，
 * 数组的第二个元素包含所有给定数组的第二个元素，以此类推。 */
function zip(...arrs: any[]) {
  return unzip(arrs);
}
export default zip;
