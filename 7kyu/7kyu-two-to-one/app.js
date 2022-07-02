// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"



function longest(s1, s2) {
    const allowableChars = 'abcdefghijklmnopqrstuvwxyz'
    let final = ''
    for (let char of s1+s2.split('')) {
      if (allowableChars.includes(char) && !final.includes(char)) final += char
    }
    return final.split('').sort().join('')
  }