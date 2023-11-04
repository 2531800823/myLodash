import baseAt from "../utils/baseAt";
import basePullAt from "../utils/basePullAt";
import map from "../gather/map";
import isIndex from "../Language/isIndex";
import compareAscending from "../utils/compareAscending";

/** 根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组 */
function pullAt(arr: any[], ...indexes: any[]) {
  const len = arr.length ?? 0;
  const result = baseAt(arr, indexes);

  basePullAt(
    arr,
    map(indexes, (index) =>
      (isIndex(index, len) ? +index : index).sort(compareAscending)
    )
  );
  return result;
}
export default pullAt;
