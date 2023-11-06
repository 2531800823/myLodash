/** 创建一个函数，调用func时参数为相对应的transforms的返回值 */
function overArgs(func: Function, transforms: Function[]) {
  const funcsLength = transforms.length;
  return function (...args: any[]) {
    let index = -1;
    const length = Math.min(args.length, funcsLength);
    while (++index < length) {
      args[index] = transforms[index].call(this, args[index]);
    }
    return func.apply(this, args);
  };
}
export default overArgs;
