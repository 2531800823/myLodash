/** mapToArray */
function mapToArray(map: any) {
  let index = -1;
  const result = new Array(map.size);

  map.forEach((val, key) => {
    result[++index] = [key, val];
  });

  return result;
}
export default mapToArray;
