import assocIndexOf from "./assocIndexOf";
/** 对象存储 object */
class ListCache {
  private size: number = 0;
  private __data__: Record<string, any> = [];
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
    this.__data__ = [];
    this.size = 0;
  }

  set(key: string, value: any) {
    const data = this.__data__;
    const index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  delete(key: string) {
    const data = this.__data__;
    const index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    const lastIndex = data.length;

    if (index === lastIndex) {
      data.pop();
    } else {
      data.splice(index, 1);
    }

    --this.size;
    return true;
  }

  get(key: string) {
    const data = this.__data__;
    const index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }

  has(key: string) {
    const data = this.__data__;
    return assocIndexOf(data, key);
  }
}

export default ListCache;
