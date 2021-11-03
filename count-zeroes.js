function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1
  
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    console.log(middleVal);
    let leftVal = arr[middleIdx - 1];
    console.log(leftVal);
    
    if (middleVal === 1){
      leftIdx = middleIdx + 1;
    } else if (leftVal === 0) {
      rightIdx = middleIdx - 1;
    } else if (leftVal === 1 && middleVal === 0) {
      return (arr.length) - middleIdx;
    }
  }
  return -1
}

module.exports = countZeroes