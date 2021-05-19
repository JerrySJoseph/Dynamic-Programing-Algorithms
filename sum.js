/**
 * returns boolean if target sum is achievable by any combination of numArray
 * @param {number} target
 * @param {numberArray} numArray
 *
 * 8->[2,3,5]
 *                8
 *              / | \
 *             /  |  \
 *            /-2 |-3 \-5
 *           /    |    \
 *          6     5     3
 *      -2 / \-3
 *
 * Conditions:
 * all numbers will always be positive at any point of time
 * any elements can be used multiple times to achieve target
 * if no combination is available return false, else return true
 */

const canSum = (target, numArray) => {
  if (target === 0) return true;
  if (target < 0) return false;

  for (let element of numArray) {
    var newTarget = target - element;
    if (canSum(newTarget, numArray)) return true;
  }
  return false;
};

/**
 *
 * conditions:
 * Repetition allowed
 *
 *              8->[2,3,5]
 *                8
 *              / | \
 *             /  |  \
 *            /-2 |-3 \-5
 *           /    |    \
 *          6     5     3
 *      -2 / \-3
 *
 * @param {number} target
 * @param {numberArray} numArray
 */

const howSum = (target, numArray, mem = {}) => {
  if (target === 0) return [];
  if (target < 0) return null;
  if (target in mem) return mem[target];

  for (let num of numArray) {
    const rem = target - num;
    const result = howSum(rem, numArray, mem);
    if (result) {
      mem[target] = [...result, num];
      return mem[target];
    }
  }
  return null;
};

const shortSum = (target, numArray, mem = {}) => {
  if (target === 0) return [];
  if (target < 0) return null;
  if (target in mem) return mem[target];

  let shortest = null;

  for (let num of numArray) {
    const rem = target - num;
    const result = shortSum(rem, numArray, mem);
    if (result) {
      mem[target] = [...result, num];
      if (!shortest || shortest.length > mem[target].length)
        shortest = mem[target];
    }
  }
  return shortest;
};

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const find = target - nums[i];
    const result = existsExcept(nums, find, i);
    if (result) return [i, result];
  }
  return null;
};
function existsExcept(arr, target, index) {
  arr[index] = "x";
  const i = arr.indexOf(target);
  console.log("i:" + i);
  return i > -1 ? i : null;
}

const twoSum2 = function (nums, target) {
  const result = {};
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (nums[i] in result) return [result[nums[i]], i];
    result[comp] = i;
  }
};

const twoSum1 = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    console.log(comp);
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};
console.log(twoSum2([3, 3, 12, 5], 6));
