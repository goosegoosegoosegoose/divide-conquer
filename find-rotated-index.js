function findRotatedIndex(arr, num) {
 let leftIdx = 0;
 let rightIdx = arr.length - 1;
 let median = Math.floor(arr.length / 2)

 while (leftIdx <= rightIdx) {
  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  let middleVal = arr[middleIdx];
  let rightVal = arr[middleIdx + 1];

    if (middleVal === num) {
      return middleIdx;
    } else if (rightVal === num) {
      return middleIdx + 1;
    } else if (middleVal > num && middleVal > rightVal && median < num) {
      console.log(`middleVal is ${middleVal}`);
      console.log(`middleIdx is ${middleIdx}`);
      rightIdx = middleIdx - 1;
    } else if (middleVal > num && middleVal > rightVal && median > num) {
      console.log(`middleVal is ${middleVal}`);
      console.log(`middleIdx is ${middleIdx}`);
      leftIdx = middleIdx + 1;
    }  else if (middleVal < num && middleVal < rightVal) {
      console.log(`middleVal is ${middleVal}`);
      console.log(`middleIdx is ${middleIdx}`);
      leftIdx = middleIdx + 1;
    } else if (middleVal > num && middleVal < rightVal) {
      console.log(`middleVal is ${middleVal}`);
      console.log(`middleIdx is ${middleIdx}`);
      rightIdx = middleIdx - 1;
    }
  }
  return -1;
}

module.exports = findRotatedIndex