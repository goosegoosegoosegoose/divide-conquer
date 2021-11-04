function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    let leftVal = arr[middleIdx - 1];
    
    if (arr[0] === 0) {
      return arr.length
    }else if (leftVal === 1 && middleVal === 0) {
      return (arr.length) - middleIdx;
    } else if (leftVal === 0 && middleIdx === arr.length-1){
      return middleIdx;
    }else if (middleVal === 1){
      leftIdx = middleIdx + 1;
    } else if (leftVal === 0) {
      rightIdx = middleIdx - 1;
    } 
  }
  return 0;
}

module.exports = countZeroes