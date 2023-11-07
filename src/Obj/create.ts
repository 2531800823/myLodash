/** 创建一个继承 prototype 的对象。
 *  如果提供了 prototype，它的可枚举属性会被分配到创建的对象上。 */
function create(prototype: any, properties: any) {
  prototype = prototype === null ? null : Object(prototype);
  const result = Object.create(prototype);
  return properties == null ? result : Object.assign(result, properties);
}
export default create;
