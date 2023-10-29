import Hash from "./Hash";

function getMapData({ __data__ }: MapCache, key: string) {
  const data = __data__;
  return isKeyable(key)
    ? data[typeof key === "string" ? "string" : "hash"]
    : data.map;
}

/** Checks if `value` is suitable for use as unique object key. */
function isKeyable(value: any) {
  const type = typeof value;
  return type === "string" ||
    type === "number" ||
    type === "symbol" ||
    type === "boolean"
    ? value !== "__proto__"
    : value === null;
}

/** 缓存 Map 支持 string Object 缓存和 Map */
class MapCache {
  private size: number = 0;
  private __data__: Record<string, any> = {
    hash: new Hash(),
    map: new Map(),
    string: new Hash(),
  };

  constructor(entries?: any[]) {
    this.clear();
    if (entries == null) {
      return;
    }
    let index = -1;
    const length = entries == null ? 0 : entries.length;

    while (++index < length) {
      const entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  clear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new Map(),
      string: new Hash(),
    };
  }

  set(key: string, value: any) {
    const data = getMapData(this, key);

    const size = data.size;
    data.set(key, value);
    this.size += data.size === size ? 0 : 1;
    return this;
  }

  delete(key: string) {
    const result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  get(key: string) {
    return getMapData(this, key).get(key);
  }

  has(key: string) {
    return getMapData(this, key).has(key);
  }
}

export default MapCache;
