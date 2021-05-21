const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function linearSearch(item) {
  let index = 0;
  while (index < arr.length) {
    if (arr[index] === item) return index;
    index++;
  }
  return -1;
}

function binarySearch(item) {
  let start = 0;
  let end = arr.length;
  let mid = (start + end) / 2;
  mid = Math.floor(mid);

  while (start <= end) {
    if (item === arr[mid]) return mid;
    else if (item < arr[mid]) end = mid - 1;
    else start = mid + 1;
    mid = (start + end) / 2;
    mid = Math.floor(mid);
  }
  return -1;
}

function jumpSearch(item) {
  let step = Math.floor(Math.sqrt(arr.length));
  let i = 0;
  for (i = 0; i < arr.length; i += step) {
    if (item < arr[i]) {
      i -= step;
      break;
    }
  }
  while (i < arr.length) {
    if (item === arr[i]) return i;
    i++;
  }
  return -1;
}

console.log(linearSearch(12));
console.log(binarySearch(10));
console.log(jumpSearch(8));
