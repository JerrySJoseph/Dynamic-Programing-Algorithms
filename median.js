/**
 * return median of two sorted array;
 */
function median(num1, num2) {
  const smallest = Math.min(num1[0], num2[0]);
  const largest = Math.max(num1[num1.length - 1], num2[num2.length - 1]);
  const length = num1.length + num2.length + 2;
  let arr = [];
  for (let i = 0; i < length; i++) {
    if (i < num1.length && i < num2.length) {
      let newarr = num1[i] < num2[i] ? [num1[i], num2[i]] : [num2[i], num1[i]];
      arr = [...arr, ...newarr];
    } else if (i < num1.length) {
      arr = [...arr, num1[i]];
    } else if (i < num2.length) {
      arr = [...arr, num2[i]];
    }
  }
  return arr;
}

function median2(num1, num2) {
  const arr = [...num1];
  let lastIndex = 0;
  for (let item of num2) {
    lastIndex = getIndex(arr, item, lastIndex);

    arr.splice(lastIndex, 0, item);
  }
  console.log(arr);
  const mid = parseInt((arr.length - 1) / 2);
  if (arr.length % 2 === 0) {
    const median = (arr[mid] + arr[mid + 1]) / 2;
    console.log("a:" + arr[mid] + "b:" + arr[mid + 1] + "=" + median);
    return parseFloat(median);
  }
  return parseFloat(arr[mid]);
}

function getIndex(arr, element, lastIndex) {
  let index = lastIndex;
  while (index <= arr.length) {
    if (element <= arr[index]) return index;
    index++;
  }
  return index;
}

function combineArray(num1, num2) {
  let i = 0,
    j = 0;
  let index = 0;
  let arr = [];
  const length = num1.length + num2.length;
  while (i < num1.length && j < num2.length) {
    if (num1[i] < num2[j]) arr[index++] = num1[i++];
    else arr[index++] = num2[j++];
  }
  console.log(arr);
  while (i < num1.length) {
    arr[index++] = num1[i++];
  }
  while (j < num2.length) {
    arr[index++] = num2[j++];
  }
  return arr;
}

function median3(nums1, nums2) {
  const arr = combineArray(nums1, num2);
  const mid = parseInt((arr.length - 1) / 2);
  if (arr.length % 2 === 0) {
    const median = (arr[mid] + arr[mid + 1]) / 2;
    console.log("a:" + arr[mid] + "b:" + arr[mid + 1] + "=" + median);
    return parseFloat(median);
  }
  return parseFloat(arr[mid]);
}

function binarySearch(arr, element) {
  let start = 0,
    end = arr.length;
  let current = 0;

  while (start <= end) {
    current = ((start + end) / 2) | 0;
    if (arr[current] === element) return current;
    else if (arr[current] > element) {
      end = current - 1;
    } else if (arr[current] < element) {
      start = current + 1;
    }
  }
  return current < element ? current + 1 : current;
}
function sortedArray(num1, num2) {}

console.log(combineArray([1, 5, 7, 9], [2, 4, 6, 8, 9]));
