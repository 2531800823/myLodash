/** Built-in value references. */
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeGetSymbols = Object.getOwnPropertySymbols;

/** getSymbols */
function getSymbols(obj: any) {
  if (obj == null) return [];

  obj = Object(obj);
  return nativeGetSymbols(obj).filter((symbol) =>
    propertyIsEnumerable.call(obj, symbol)
  );
}
export default getSymbols;
