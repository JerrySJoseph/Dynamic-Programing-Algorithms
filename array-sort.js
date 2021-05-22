const arr = [
  9, 8, 7, 6, 1, 2, 3, 6, 89, 6, 5, 6, 55, 6, 7, 5, 4, 3, 3, 2, 4, 5, 6, 77, 8,
  5, 3, 2, 45,
];

function bubbleSort(arr) {
  let temp = null;
  if (arr.length === 1) return arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j >= 0 && arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      j--;
    }
  }
  return arr;
}

function quickSort(arr, low, high) {
  if (low < high) {
    const p = quickSortPartition(arr, low, high);
    arr = quickSort(arr, low, p - 1);
    arr = quickSort(arr, p + 1, high);
  }
  return arr;
}

function quickSortPartition(arr, low, high) {
  let pivot = arr[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
}

console.log(bubbleSort(arr));
console.log(insertionSort(arr));
console.log(quickSort(arr));
