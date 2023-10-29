import getMatchData from "./getMatchData";
import matchesStrictComparable from "./matchesStrictComparable";
/** baseMatches */
function baseMatches(source) {
  const matchData = getMatchData(source);
  if (matchData.length === 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }

  return (obj) => obj === source || baseMatches(obj, source, matchData);
}
export default baseMatches;
