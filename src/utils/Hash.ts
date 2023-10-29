const HASH_UNDEFINED = "__lodash_hash_undefined__";

/** 对象存储 object */
class Hash {
  private size: number = 0;
  private __data__: Record<string, any> = Object.create(null);
  constructor(entries?: any[]) {
    if (entries == null) {
      return;
    }
    let index = -1;
    const length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      const entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  clear() {
    this.__data__ = Object.create(null);
    this.size = 0;
  }

  set(key: string, value: any) {
    const data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = value === undefined ? HASH_UNDEFINED : value;
    return this;
  }

  delete(key: string) {
    const result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  get(key: string) {
    const data = this.__data__;
    const result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  has(key: string) {
    const data = this.__data__;
    return data[key] !== undefined;
  }
}

export default Hash;
