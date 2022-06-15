// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



function pigIt(str){
  
    const puncs = "!?.,'"
    
    return str.split(' ').map(e => {
      if (puncs.includes(e)) return e
      const _ay  = e.slice(0,1) + 'ay'
      const word = e.slice(1)
      return word + _ay
    }).join(' ')
}