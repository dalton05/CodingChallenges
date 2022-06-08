// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.





function high(x){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    let bestWord = {
      word: x.split(' ')[0],
      score: 0
    }
    bestWord.word.split('').forEach(e => bestWord.score += alphabet.indexOf(e) + 1)
      
    x.split(' ').forEach(e => {
      let checkScore = 0
      e.split('').forEach(e => checkScore += alphabet.indexOf(e) + 1)
      if (checkScore > bestWord.score) {
        bestWord.word = e
        bestWord.score = checkScore
      }
    })
    
    return bestWord.word
}