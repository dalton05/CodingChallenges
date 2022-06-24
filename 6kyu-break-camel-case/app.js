// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""



function solution(string) {
    let arr = string.split(/([A-Z])/)
    let result = ''
    arr.forEach((e,i) => {
      result += e
      if (i%2===0) {
        result += ' '
      }
    })
    return result.trim()
  }
  