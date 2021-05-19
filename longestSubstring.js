function longestSubstring(s) {
  let sub = "";
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (sub.includes(char)) {
      if (sub.indexOf(char) === 0) {
        sub = sub.substring(1);
      } else {
        const index = sub.indexOf(char);
        sub = sub.slice(index + 1, sub.length);
      }
    }

    sub += char;
    if (sub.length > longest) longest = sub.length;
    console.log(sub);
  }
  return longest;
}

function longestSubstring2(s) {
  const indices = {};
  let left = 0;
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char in indices) {
      console.log("--------");
      left = Math.max(indices[char], i);
      console.log("left: " + left);
    }
    longest = Math.max(longest, i - left + 1);
    indices[char] = i + 1;
  }
  return longest;
}

console.log(longestSubstring2("abcabcbb"));
