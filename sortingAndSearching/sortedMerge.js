/*
You are given two sorted arays, A and B, where A has a large enough buffer at the end to hold B. Write a method to merge B into A in sorted order.
*/

const sortedMerge = function(a, b) {
  let aLength = a.length;
  while (aLength && b.length) {
    if (a[0] < b[0]) {
      a.push(a.shift());
      aLength--;
      console.log(aLength);
    } else {
      a.push(b.shift());
    }
  }
  while (aLength > 0) {
    a.push(a.shift());
    aLength--;
  }
  while (b.length) {
    a.push(b.shift());
  }
  return a;
}
