/** ' matchesProperty '的特殊版本，用于合适的源值
 *表示严格相等比较，即= = =。 */
function matchesStrictComparable(key: string | symbol, srcValue: any) {
  return (object: any) => {
    if (object == null) {
      return false;
    }
    return (
      object[key] === srcValue &&
      (srcValue !== undefined || key in Object(object))
    );
  };
}
export default matchesStrictComparable;
