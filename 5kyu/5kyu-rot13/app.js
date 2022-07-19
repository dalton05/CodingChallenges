// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


function rot13(message){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    function shift13(num) {
      return num > 12 ? num+13-26 : num+13
    }
    
    const decoded = message.split('').map(e => alphabet.includes(e.toLowerCase()) ? alphabet[shift13(alphabet.indexOf(e.toLowerCase()))] : e)
      
    return decoded.map((e, i) => message[i].toUpperCase() === message[i] ? e.toUpperCase() : e).join('')
  }