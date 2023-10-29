/** setToArray */
function setToArray(set: any) {
  let index = -1;
  const result = new Array(set.size);

  set.forEach((val, key) => {
    result[++index] = [key, val];
  });

  return result;
}
export default setToArray;
