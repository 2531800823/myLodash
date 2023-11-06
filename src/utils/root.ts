import freeGlobal from "./freeGlobal";

/**  globalThis 是否存在*/
const freeGlobalThis =
  typeof globalThis === "object" &&
  globalThis !== null &&
  globalThis.Object === Object &&
  globalThis;

const freeSelf =
  typeof self === "object" && self !== null && self.Object === Object && self;

/** 用作对全局对象的引用 */
const root: Window =
  freeGlobalThis || freeGlobal || freeSelf || Function("return this")();

export default root;
