function stringCompression(str, compress = '', i = 0, prev = null) {
  if (i === str.length) {
    return compress.length < str.length ? compress : str;
  } else {
    if (str[i] !== prev) {
      compress += str[i] + '1';
      prev = str[i];
    } else {
      prev = str[i];
      let num = Number(compress.slice(-1));
      compress = compress.slice(0, -1) + (++num).toString();
    }
    return stringCompression(str, compress, ++i, prev)
  }
}

// aabcccccaaa => a2b1c5a3
console.log( stringCompression('aaaaaabc') );
