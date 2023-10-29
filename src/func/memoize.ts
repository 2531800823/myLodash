/** 创建一个会缓存 func 结果的函数。 如果提供了 resolver ，就用 resolver 的返回值作为 key 缓存函数的结果。
 * 默认情况下用第一个参数作为缓存的 key。 func 在调用时 this 会绑定在缓存函数上。 */
function memoize(func: Function, resolver: Function) {
  if (
    typeof func !== "function" ||
    (resolver != null && typeof resolver !== "function")
  ) {
    throw new TypeError("需要传入函数");
  }
  const memoized = function (...args) {
    const key = resolver ? resolver.apply(this, args) : args[0];
    const cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    memoize.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoized.Cache || Map)();
  return memoized;
}

memoize.Cache = Map;
export default memoize;
