function sortedFrequency(arr, num) {
  let freq  = 0

  for (let i = 0; arr.length > 0; i++) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
      let middleIdx = math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
      
    }
  }
}

module.exports = sortedFrequency