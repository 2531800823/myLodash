/** ' assignValue '和' assignMergeValue '的基本实现没有
 *值检查。 */
function baseAssignValue(obj: object, key: string, value: any) {
  if (key === "__proto__") {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      value: value,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
}
export default baseAssignValue;
