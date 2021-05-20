/**
 * Longest Increasing Substring
 */
function lis(arr) {
  let longest = 0;
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    // res[i] = cycle(arr, i);
    longest = Math.max(longest, cycle(arr, i));
  }
  return longest;
}
function cycle(arr, index) {
  let base = arr[index];
  let newarr = [base];
  for (let i = index; i < arr.length; i++) {
    if (base < arr[i]) {
      base = arr[i];
      newarr = [...newarr, base];
    }
  }
  return newarr.length;
}

console.log(
  lis([1, 2, 3, 4, 5, 3, 3, 4, 3, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9])
);
