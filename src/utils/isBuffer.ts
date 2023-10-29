import root from "./root";

const nativeIsBuffer = root?.Buffer?.isBuffer;

const isBuffer =
  typeof nativeIsBuffer === "function" ? nativeIsBuffer : () => false;

export default isBuffer;
