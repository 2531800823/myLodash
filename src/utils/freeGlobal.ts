/** 判断 node 全局对象 */
const freeGlobal =
  typeof global === "object" &&
  global !== null &&
  globalThis.Object === Object &&
  global;

export default freeGlobal;
