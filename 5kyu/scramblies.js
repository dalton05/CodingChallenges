// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.

// Examples

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False





function scramble(str1, str2) {
 
    const populateObj = (str) => {
      let obj = {}
      for (const e of str) {
        obj[e] ? obj[e]++ : obj[e] = 1
      }
      return obj
    }
    
    const obj1 = populateObj(str1)
    const obj2 = populateObj(str2)
    
    for (const e in obj2) {
      if (!obj1[e] || obj2[e] > obj1[e]) return false
    }
    
    return true
  }
  