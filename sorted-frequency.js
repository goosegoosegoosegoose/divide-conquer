function sortedFrequency(arr, num) {

  const firstInstance = (arr, num) => {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      if ((middleIdx === 0 || num > arr[middleIdx - 1]) && arr[middleIdx] === num) {
        return middleIdx
      } else if (num > arr[middleIdx]) {
        leftIdx = middleIdx + 1
      } else {
        rightIdx = middleIdx -1
      }
    }
    return -1
  } 

  const lastInstance = (arr, num) =>  {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

      if ((middleIdx === rightIdx || num < arr[middleIdx + 1]) && arr[middleIdx] ===  num) {
        return middleIdx
      } else if (num < arr[middleIdx]) {
        rightIdx = middleIdx - 1;
      } else {
        leftIdx = middleIdx + 1;
      }
    }
    return -1
  }

  let idxFirst = firstInstance(arr, num);
  if (idxFirst === -1) return -1
  let idxLast = lastInstance(arr, num);
  return idxLast - idxFirst + 1;
}

module.exports = sortedFrequency

// seems in everything i look up there needs to be 3 functions within. 
// Unsure how that parses in time complexity