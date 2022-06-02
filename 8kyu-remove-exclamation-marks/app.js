// Write function RemoveExclamationMarks which removes all exclamation marks from a given string. hey


function removeExclamationMarks(s) {
    return s.split('').filter(e => e != '!').join('')
  }