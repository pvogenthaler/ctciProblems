function palindromePermutation(str) {
  var chars = {};
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      chars[str[i]] = chars[str[i]] ? ++chars[str[i]] : 1;
    }
  }
  let odds = 0;
  for (var char in chars) {
    if (chars[char] % 2 === 1) {
      odds++;
    }
  }
  return odds > 1 ? false : true;
}


console.log( palindromePermutation('tact coa') );
