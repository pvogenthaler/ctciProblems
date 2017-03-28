/*
Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
*/

// O(n) time & O(n) space

function isUniqueSimple(str) {
  let strObj = {};
  for (let i = 0; i < str.split('').length; i++) {
    let char = str.split('')[i];
    if (!strObj[char]) {
      strObj[char] = char;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isUniqueSimple('hello'));
console.log(isUniqueSimple('world'));


function isUnique(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      return false;
    }
  }
  return true;
}

console.log(isUnique('hello'));
console.log(isUnique('world'));
