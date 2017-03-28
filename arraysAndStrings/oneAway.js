function oneAway(str1, str2) {
  for (let i = 0; i <= str1.length; i++) {
    let inserting, replacing, removing;
    if (str1[i]) {
      inserting = str1 === str2.substring(0, i).concat(str1[i], str2.substring(i, str2.length));
      replacing = str1 === str2.substring(0, i).concat(str1[i], str2.substring(i + 1, str2.length));
    } else {
      inserting = false, replacing = false;
    }
    removing = str1 === str2.substring(0, i).concat(str2.substring(i + 1, str2.length));

    if ( inserting || (replacing || removing) ) {
      return true;
    }
  }
  return false;
}

console.log( oneAway('bo', 'box') );
