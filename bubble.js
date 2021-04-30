function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}

function swap(arr, i, j) {
  return [arr[i], arr[j]] = [arr[j], arr[i]];
}

bubbleSort([0, 4, 5, 2, 1]);

module.exports = bubbleSort;