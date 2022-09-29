// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

// choose a text in capital letters including or not digits and non alphabetic characters,

//     shift each letter by a given number but the transformed letter must be a letter (circular shift),
//     replace each digit by its complement to 9,
//     keep such as non alphabetic and non digit characters,
//     downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
//     reverse the whole result.

// Example:

// your text: "BORN IN 2015!", shift 1

// 1 + 2 + 3 -> "CPSO JO 7984!"

// 4 "CpSo jO 7984!"

// 5 "!4897 Oj oSpC"

// With longer passphrases it's better to have a small and easy program. Would you write it?

// https://en.wikipedia.org/wiki/Passphrase


function playPass(s, n) {  
    const alph = 'abcdefghijklmnopqrstuvwxyz'
    const nums = '0123456789'
      
    return s.split('').map((e,arrI) => {
      // if num
      if (nums.includes(e)) return 9-Number(e) 
      // if letter
      let char = e.toLowerCase()
      if (alph.includes(char)) {
        const i = alph.indexOf(char)
        char = i+n > 25 ? alph.charAt(i-26+n) : alph.charAt(i+n)
        if (arrI%2==0) char = char.toUpperCase() 
        return char
      }
      return char
    }).reverse().join('')
  }