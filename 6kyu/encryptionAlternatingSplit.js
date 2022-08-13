// Description:

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.



function encrypt(text, n) {
    if (text === '' || text === null) return text
    
    let result = text
    let currentIteration = result
    
    for (let x = 0; x < n; x++) {
      currentIteration = ''
      for (let i = 1; i < result.length; i+=2) {
        currentIteration += result[i]
      }
      for (let i = 0; i < result.length; i+=2) {
        currentIteration += result[i]
      }
      result = currentIteration
    }
    
    return result
  }
  
  function decrypt(encryptedText, n) {
    let result = encryptedText
    let currentIteration = result
  
    for (let x = 0; x < n; x++) {
      currentIteration = ''
      let iB = Math.floor(encryptedText.length/2)
      for (let i = 0; i < encryptedText.length/2; i++) {
        currentIteration += result[iB+i]
        if (currentIteration.length != encryptedText.length) {
          currentIteration += result[i]
        }
      }
      result = currentIteration
    }
  
    return result
  }