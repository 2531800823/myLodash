import SetCache from "./SetCache";
import MapCache from "./MapCache";
import Hash from "./Hash";

/** 判断是否有缓存 */
function cacheHas(cache: SetCache | MapCache | Hash, key: string) {
  return cache.has(key);
}
export default cacheHas;
