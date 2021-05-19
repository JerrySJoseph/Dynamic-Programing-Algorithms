function canConstruct(target, arr, mem = {}) {
  if (target === "") return true;
  if (target in mem) return mem[target];
  for (let word of arr) {
    //if word is prefix
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const result = canConstruct(suffix, arr, mem);
      if (result) {
        mem[target] = true;
        return true;
      }
    }
  }
  return false;
}

function howConstruct(target, arr, mem = {}) {
  if (target === "") return [];
  if (target in mem) return mem[target];
  for (let word of arr) {
    //if word is prefix
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const result = howConstruct(suffix, arr, mem);
      if (result) {
        return (mem[target] = [...result, word]);
      }
    }
  }
  return null;
}

function countConstruct(target, arr) {
  if (target === "") return 1;

  let totalcount = 0;
  for (let word of arr) {
    //check if prefix
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      totalcount += countConstruct(suffix, arr);
    }
  }
  return totalcount;
}

function allConstruct(target, arr) {
  if (target === "") return [[]];

  let response = [];
  for (let word of arr) {
    //if word is prefix
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const result = allConstruct(suffix, arr);
      const targetWays = result.map((item) => [word, ...item]);
      response.push(...targetWays);
    }
  }
  return response;
}

console.log(allConstruct("abc", ["a", "bcd", "b", "abc", "ab", "bc", "c"])); //false
console.log(countConstruct("jerin", ["jer", "erin", "in"])); //true
console.log(countConstruct("abcd", ["a", "bcd", "b"])); //true
console.log(countConstruct("", ["a", "bcd", "b"])); //true
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "bcd",
    "d",
  ])
); //false
