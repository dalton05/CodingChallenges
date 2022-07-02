// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.



function accum(s) {
	let final = ''
  
  s.split('').map((e,i) => {
    final += e.toUpperCase()
    for (let num = 0; num < i; num++) {
      final += e.toLowerCase()
    }
    if (i < s.length-1) final += '-'
  })
  
  return final
}