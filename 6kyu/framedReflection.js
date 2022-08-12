// 100th Kata

// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

// 'Hello World'

// would give:

// Words in your solution should be left-aligned.



function mirror(text){
    const rev = text.split(' ').map(e => e.split('').reverse().join(''))
    let width = 0
    rev.forEach(e => {
      if (e.length > width) width = e.length
    }) 
    width += 4
    let result = '*'.repeat(width)
    rev.forEach(e => {
      let line = `\n* ${e}`
      line += ' '.repeat(width - line.length) + '*'
      result += line
    })
    result += '\n' + '*'.repeat(width)
    return result
  }