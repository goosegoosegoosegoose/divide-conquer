function findFloor(arr, num) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    let rightVal = arr[middleIdx + 1];

    if (middleVal < num && (rightVal > num || middleIdx == arr.length-1)) {
      return middleVal
    } else if (middleVal > num) {
      rightIdx = middleIdx - 1
    } else {
      leftIdx = middleIdx + 1
    }
  }
  return -1;
}

module.exports = findFloor