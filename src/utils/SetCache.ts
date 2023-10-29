import MapCache from "./MapCache";

const HASH_UNDEFINED = "__loadsh_hash_undefined__";
/** set 缓存  */
class SetCache {
  private __data__: MapCache;
  constructor(values: any[]) {
    let index = -1;
    const length = values == null ? 0 : values.length;

    this.___data__ = new MapCache();
    while (++index < length) {
      this.add(values[index]);
    }
  }
  add(val: any) {
    this.__data__.set(val, HASH_UNDEFINED);
    return this;
  }

  has(val: any) {
    return this.__data__.has(val);
  }

  push = this.add;
}

export default SetCache;
