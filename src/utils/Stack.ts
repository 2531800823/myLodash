import ListCache from "./ListCache";
import MapCache from './MapCache';

/** Used as the size to enable large array optimizations. */
const LARGE_ARRAY_SIZE = 200
class Stack {
  private size: number = 0;
  private __data__;
  constructor(entries?: any[]) {
    const data = (this.__data__ = new ListCache(entries));
    this.size = data.size;
  }

  clear() {
    this.__data__ = undefined;
    this.size = 0;
  }

  set(key: string, value: any) {
      const data = this.__data__;
      if (data instanceof ListCache) {
          const pairs = data.__data__
          if (pairs.length < LARGE_ARRAY_SIZE - ) {
              pairs.push([key,value])
              this.size = ++data.size
              return this
          }
          data= this.__data__ = new MapCache(pairs)
      }
      data.set(key, value)
      this.size = data.size;
      
    return this;
  }

  delete(key: string) {
    const data = this.__data__;

    const result = data["delete"](key);
    this.size = data.size;
    return result;
  }

  get(key: string) {
    return this.__data__.get(key);
  }

  has(key: string) {
    return this.__data__.has(key);
  }
}

export default Stack