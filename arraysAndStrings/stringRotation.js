function stringRotation(str1, str2, len = str1.length) {
  if (str1 === str2) {
    return true;
  } else if (len) {
    return stringRotation(str1, str2.substring(1).concat(str2[0]), --len);
  }
  return false;
}

console.log( stringRotation('waterbottle', 'erbottlewat') );
