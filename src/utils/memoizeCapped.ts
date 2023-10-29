import memoize from "../func/memoize";

/** 用作最大记忆缓存大小. */
const MAX_MEMOIZE_SIZE = 500;

/** ' memoize '的特殊版本，用于清除已记忆函数的 */
function memoizeCapped(func) {
  const result = memoize(func, (key) => {
    const { caches } = result;
    if (caches.size === MAX_MEMOIZE_SIZE) {
      caches.clear();
    }

    return key;
  });
  return result;
}
export default memoizeCapped;
