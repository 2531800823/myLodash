import isIterateeCall from "../Language/isIterateeCall";
/** 创建一个类似于' assign '的函数 */
function createAssigner(assigner: Function) {
  return (obj, ...sources) => {
    let index = -1;
    let length = sources.length;
    let customizer = length > 1 ? sources[length - 1] : undefined;
    const guard = length > 2 ? sources[2] : undefined;
    customizer =
      assigner.length > 3 && typeof customizer === "function"
        ? (length--, customizer)
        : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    obj = Object(obj);
    while (++index < length) {
      const source = sources[index];
      if (source) {
        assigner(obj, source, index, customizer);
      }
    }
    return obj;
  };
}
export default createAssigner;
