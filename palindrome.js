function longestPalindromeSubstring(s) {
  let start = 0;
  let end = 0;
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    const len1 = expandFromMiddle(s, i, i);
    const len2 = expandFromMiddle(s, i, i + 1);
    console.log("len1: " + len1 + " len2: " + len2);
    longest = Math.max(len1, len2);
    if (longest > end - start) {
      start = i - (longest - 1) / 2;
      end = i + longest / 2;
    }
  }
  return s.substring(start, end);
}
function expandFromMiddle(string, left, right) {
  if (!string || left > right) return 0;
  while (
    left >= 0 &&
    string.length > 0 &&
    string.charAt(left) === string.charAt(right)
  ) {
    left--;
    right++;
  }
  return right - left + 1;
}
function isPalindrome(s) {
  if (s === "") return true;
  if (s.length === 1) return true;

  if (s.charAt(0) === s.charAt(s.length - 1)) {
    return isPalindrome(s.substring(1, s.length - 1));
  }
  return false;
}

console.log(longestPalindromeSubstring("racecar"));
