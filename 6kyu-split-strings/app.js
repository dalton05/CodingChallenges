// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']





function solution(str){
   
    let first = true
     let result = []
     
     str.split('').forEach((e,i,a) => {
       if (first) {
         let string = ''
         if (i < a.length-1) {
           string = `${e}${a[i+1]}`
         } else {
           string = `${e}_`
         }
         result.push(string)
         first = false
       } else {
         first = true
       }
     })
    }