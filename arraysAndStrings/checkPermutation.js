function checkPermutation(str1, str2, s = '', permutes = {}, len = str1.length) {
  if (s.length === len) {
    return permutes[s] = s;
  }
  for (var i = 0; i < str1.length; i++) {
    newStr = str1.substring(0, i).concat(str1.substring(i + 1, str1.length));
    checkPermutation(newStr, str2, s.concat(str1[i]), permutes, len);
  }
  return permutes[str2] ? true : false;
}


console.log( checkPermutation('racecar', 'carrace') );
