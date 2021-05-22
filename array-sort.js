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
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort(arr));
