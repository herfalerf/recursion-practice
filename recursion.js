/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, length = 0, i = 0) {
  if (i === words.length) return length;
  if (words[i].length > length) length = words[i].length;
  return longest(words, length, i + 1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, out = "", i = 0) {
  if (i === str.length) return out;
  if (i % 2 === 0) out += str[i];
  return everyOther(str, out, i + 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, rev = [], i = str.length - 1) {
  if (str == rev.join("")) return true;
  if (i === -1) return false;
  rev.push(str.slice(i, i + 1));
  return isPalindrome(str, rev, i - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, rev = [], i = str.length - 1) {
  if (i === -1) return rev.join("");
  rev.push(str.slice(i, i + 1));
  return revString(str, rev, i - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object")
      stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
