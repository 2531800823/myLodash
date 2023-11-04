/** 从collection（集合）中获得一个随机元素。 */
function sample(arr: any[]) {
  const lenth = arr == null ? 0 : arr.length;
  return lenth ? arr[Math.floor(Math.random() * lenth)] : undefined;
}
export default sample;
