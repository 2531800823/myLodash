import baseSet from "./baseSet";
/** ' update '的基本实现。 */
function baseUpdate(
  obj: any,
  path: string | string[],
  updater: Function,
  customizer?: Function
) {
  return baseSet(obj, path, updater(baseSet(obj, path)), customizer);
}
export default baseUpdate;
