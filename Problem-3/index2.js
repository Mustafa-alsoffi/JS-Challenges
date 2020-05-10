function getIndexToIns(arr, num) {
  if (arr.length == 0) {
    return 0
  } else {
    let index = arr.indexOf(arr.sort((a, b) => a-b).filter(elem => elem >= num)[0])
    return index != -1 ? index : arr.length++;
      }
}

getIndexToIns([80, 23, 12], 70);