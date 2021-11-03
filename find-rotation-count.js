function findRotationCount(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    let rightVal = arr[middleIdx + 1];
    let leftVal = arr[middleIdx - 1];
    let eVal = arr[rightIdx];
    
    if (middleVal > rightVal){
      return middleIdx + 1
    } else if (middleVal < leftVal) { 
      return middleIdx
    } else if (middleVal > eVal) {
      leftIdx = middleIdx + 1
    } else if (middleVal < eVal) {
      rightIdx = middleIdx - 1
    }
  }
  return 0;
}

module.exports = findRotationCount