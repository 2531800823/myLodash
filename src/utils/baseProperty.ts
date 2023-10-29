/** property的基本实现，不支持深度路径 */
function baseProperty(key: string) {
  return (object) => (object == null ? undefined : object[key]);
}
export default baseProperty;
